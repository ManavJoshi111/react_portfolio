// Lightweight, fire-and-forget visit tracker.
//
// On the first load of a browser session it collects UTM params + everything
// derivable in the browser (device, locale, screen, timezone, referrer) and
// beacons it to the Firebase Cloud Function, which enriches it with IP + geo
// server-side. It is intentionally defensive: tracking must never break the
// site, and it must never cost more than it has to (one send per session, no
// retries, skipped entirely on localhost).
//
// After capturing, the UTM/ref params are stripped from the address bar so the
// visitor never sees a long, ugly URL (the #hash used by the navbar is kept).

const ENDPOINT = import.meta.env.VITE_TRACKING_ENDPOINT;
const SESSION_FLAG = "m-portfolio-tracked";

type DeviceType = "mobile" | "tablet" | "desktop";

function isTrackingKey(key: string): boolean {
  const k = key.toLowerCase();
  return k.startsWith("utm_") || k === "ref" || k === "source";
}

function getDeviceType(ua: string): DeviceType {
  if (
    /iPad|Tablet|PlayBook|Silk/i.test(ua) ||
    (/Android/i.test(ua) && !/Mobile/i.test(ua))
  ) {
    return "tablet";
  }
  if (
    /Mobi|iPhone|Android.*Mobile|Windows Phone|IEMobile|BlackBerry|Opera Mini/i.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
}

// Capture every utm_* param (utm_source, utm_medium, utm_campaign, utm_term,
// utm_content, and any custom ones like utm_platform), plus common ref keys.
function collectUtm(params: URLSearchParams): Record<string, string> {
  const utm: Record<string, string> = {};
  params.forEach((value, key) => {
    if (isTrackingKey(key)) utm[key] = value;
  });
  return utm;
}

// Remove only the tracking params from the URL, keeping any other query params
// and the #hash intact. No reload — just rewrites the history entry.
function cleanUrl(): void {
  const url = new URL(window.location.href);
  let changed = false;
  for (const key of [...url.searchParams.keys()]) {
    if (isTrackingKey(key)) {
      url.searchParams.delete(key);
      changed = true;
    }
  }
  if (!changed) return;
  const search = url.searchParams.toString();
  const clean = url.pathname + (search ? `?${search}` : "") + url.hash;
  window.history.replaceState(null, "", clean);
}

function sendVisit(params: URLSearchParams): void {
  if (!ENDPOINT) {
    if (import.meta.env.DEV) {
      console.warn("[tracker] VITE_TRACKING_ENDPOINT not set — skipping send.");
    }
    return;
  }

  // Skip local development so we never pollute data or spend on test loads.
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1" || host === "") return;

  // One beacon per browser session keeps invocations (and cost) minimal.
  if (sessionStorage.getItem(SESSION_FLAG)) return;

  const ua = navigator.userAgent;
  const payload = {
    capturedAt: new Date().toISOString(),
    page: window.location.pathname,
    url: window.location.href,
    referrer: document.referrer || null,
    utm: collectUtm(params),
    device: {
      type: getDeviceType(ua),
      userAgent: ua,
      platform:
        (navigator as unknown as { userAgentData?: { platform?: string } })
          .userAgentData?.platform ??
        navigator.platform ??
        null,
      language: navigator.language,
      languages: navigator.languages,
      touch: (navigator.maxTouchPoints ?? 0) > 0,
      screen: {
        width: window.screen.width,
        height: window.screen.height,
        dpr: window.devicePixelRatio,
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  };

  const body = JSON.stringify(payload);

  // sendBeacon with a text/plain Blob is a CORS "simple" request, so it
  // avoids a preflight round-trip (one fewer function invocation).
  let sent = false;
  if (navigator.sendBeacon) {
    sent = navigator.sendBeacon(
      ENDPOINT,
      new Blob([body], { type: "text/plain" })
    );
  }
  if (!sent) {
    void fetch(ENDPOINT, {
      method: "POST",
      body,
      keepalive: true,
      headers: { "Content-Type": "text/plain" },
    }).catch(() => {});
  }

  sessionStorage.setItem(SESSION_FLAG, "1");
}

export function initTracking(): void {
  try {
    const params = new URLSearchParams(window.location.search);
    sendVisit(params);
  } catch {
    // Tracking is best-effort — swallow everything.
  } finally {
    // Always tidy the URL, even if the send was skipped (dev, repeat session).
    try {
      cleanUrl();
    } catch {
      /* noop */
    }
  }
}
