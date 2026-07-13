# Visit tracking

Traces where portfolio traffic comes from: UTM tags you attach to links, plus
everything derivable server-side (IP, coarse city/country, ISP, device, locale,
timezone). No browser location popup is ever shown — geo is resolved from the IP.

## How it works

```
Visitor opens site (Netlify)
   │  src/lib/tracker.ts runs once per session
   │  → collects utm_* params + device/locale/screen/referrer
   │  → navigator.sendBeacon(text/plain) ──────────────┐
   ▼                                                    ▼
                                    Firebase Cloud Function `trackVisit`
                                       → reads client IP from headers
                                       → ip-api.com lookup (city/country/ISP)
                                       → writes one doc to Firestore `visits`
```

Each Firestore document in the **`visits`** collection looks like:

```jsonc
{
  "receivedAt": "<server timestamp>",
  "ip": "203.0.113.7",
  "geo": { "country": "India", "city": "Ahmedabad", "isp": "...", "lat": 23.0, "lon": 72.5, ... },
  "client": {
    "utm": { "utm_source": "linkedin", "utm_platform": "mobile-app", "utm_campaign": "resume" },
    "referrer": "https://www.linkedin.com/",
    "device": { "type": "mobile", "userAgent": "...", "timezone": "Asia/Kolkata", "language": "en-IN", ... },
    "url": "https://memanav.netlify.app/?utm_source=linkedin&utm_platform=mobile-app"
  },
  "serverUserAgent": "..."
}
```

The UTM/ref params are also **stripped from the address bar** right after capture
(`history.replaceState`, no reload, `#hash` preserved), so visitors never see the
long tracking URL.

## One-time setup

**Firebase side** (project: `manav-portfolio`)

1. **Blaze plan** — Console → ⚙ → *Usage and billing* → *Modify plan* → **Blaze**.
   Required for Cloud Functions + the outbound ip-api call. Then set a **Budget
   alert** ($1) in Google Cloud Console → Billing → *Budgets & alerts*.
2. **Create Firestore** — Console → Build → *Firestore Database* → *Create
   database* → **Production mode** → pick a location (permanent).
3. **CLI** — `npm install -g firebase-tools` then `firebase login`.
4. **Confirm project id** — `.firebaserc` is set to `manav-portfolio`. If the
   console's *Project settings → Project ID* differs, update it or run
   `firebase use <actual-id>`.
5. **CORS allowlist** — `functions/index.js` → `ALLOWED_ORIGINS` is
   `["https://manavjoshi.netlify.app"]`. Add a custom domain if you have one.
6. **Deploy**:
   ```bash
   cd functions && npm install && cd ..
   firebase deploy --only functions
   firebase deploy --only firestore:rules   # deploy the deny-all client rules
   ```
   Copy the printed **Function URL** (gen-2, looks like
   `https://trackvisit-xxxx-uc.a.run.app`).

**Client side**

7. Set `VITE_TRACKING_ENDPOINT` to that URL:
   - Local (optional): create `.env.local` from `.env.example`.
   - Production (required): **Netlify → Site configuration → Environment
     variables** → add `VITE_TRACKING_ENDPOINT`, then **trigger a redeploy**
     (Vite inlines it at build time).
8. **Verify**: open `https://manavjoshi.netlify.app/?utm_source=test&utm_platform=whatsapp`
   → URL should snap clean, and a new doc appears in Firestore `visits`.

## Attaching UTMs

Any link you share can carry tags; the tracker captures every `utm_*` key:

```
https://memanav.netlify.app/?utm_source=linkedin&utm_medium=profile&utm_campaign=jobsearch&utm_platform=mobile
```

## Cost controls (Blaze — stays within free tier)

- **One beacon per browser session** (`sessionStorage` flag) — refreshes/HMR don't re-send.
- **Localhost is skipped** entirely, so dev never spends.
- **`maxInstances: 3`** on the function caps scaling — a spike or abuse can't run up a bill.
- **256 MiB / 15 s** function, single Firestore write per visit, `sendBeacon` avoids a
  CORS preflight (one invocation, not two).
- Free tiers you'd have to blow past to pay anything: Functions ~2M calls/mo,
  Firestore 20K writes/day. A portfolio won't come close.
- Recommended: set a **Budget alert** in Google Cloud Billing (e.g. $1) as a backstop.

## Viewing the data

Firebase console → Firestore → `visits` collection. Export to JSON anytime with:

```bash
gcloud firestore export gs://YOUR_BUCKET   # or read via a script
```
