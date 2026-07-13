const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

initializeApp();
const db = getFirestore();

// --- CONFIG ---------------------------------------------------------------
// Only these origins may POST from the browser. Add your real Netlify site
// URL (and custom domain, if any). Nothing else gets a CORS pass.
const ALLOWED_ORIGINS = ["https://manavjoshi.netlify.app"];

// Fields we ask ip-api.com for. Free tier, HTTP only, no key required.
const GEO_FIELDS =
  "status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,mobile,proxy,hosting,query";
// --------------------------------------------------------------------------

function setCors(req, res) {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
  }
  res.set("Vary", "Origin");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");
}

function clientIp(req) {
  const xff = req.headers["x-forwarded-for"];
  if (typeof xff === "string" && xff.length) {
    return xff.split(",")[0].trim();
  }
  return req.ip || null;
}

async function lookupGeo(ip) {
  if (!ip) return null;
  try {
    const r = await fetch(
      `http://ip-api.com/json/${encodeURIComponent(ip)}?fields=${GEO_FIELDS}`,
    );
    if (!r.ok) return null;
    const g = await r.json();
    if (g.status !== "success") return { error: g.message || "geo_failed" };
    return g;
  } catch (e) {
    return null;
  }
}

function parseBody(req) {
  let data = req.body;
  try {
    if (typeof data === "string") return JSON.parse(data);
    if (Buffer.isBuffer(req.rawBody))
      return JSON.parse(req.rawBody.toString("utf8"));
  } catch (e) {
    return {};
  }
  return data && typeof data === "object" ? data : {};
}

// maxInstances caps how far this can scale, which is the real cost guardrail:
// even under a traffic spike or abuse, billing can't run away.
exports.trackVisit = onRequest(
  {
    region: "us-central1",
    memory: "256MiB",
    timeoutSeconds: 15,
    maxInstances: 3,
  },
  async (req, res) => {
    setCors(req, res);

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const client = parseBody(req);
    const ip = clientIp(req);
    const geo = await lookupGeo(ip);

    const record = {
      receivedAt: FieldValue.serverTimestamp(),
      ip,
      geo,
      client,
      serverUserAgent: req.headers["user-agent"] || null,
    };

    try {
      await db.collection("visits").add(record);
    } catch (e) {
      console.error("Failed to write visit:", e);
      res.status(500).send("");
      return;
    }

    // 204: nothing to return to a fire-and-forget beacon.
    res.status(204).send("");
  },
);
