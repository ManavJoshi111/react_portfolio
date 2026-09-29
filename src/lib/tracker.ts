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

export type DeviceType = "mobile" | "tablet" | "desktop";

export type GeolocationStatus =
  | "granted"
  | "denied"
  | "unavailable"
  | "timeout"
  | "unsupported"
  | "abandoned";

export interface DevicePreciseLocation {
  status: GeolocationStatus;
  latitude?: number;
  longitude?: number;
  accuracy?: number;
  altitude?: number | null;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  speed?: number | null;
  timestamp?: number;
}

export interface DeviceInfo {
  type: DeviceType;
  userAgent: string;
  platform: string | null;
  language: string;
  languages: readonly string[];
  touch: boolean;
  screen: {
    width: number;
    height: number;
    dpr: number;
  };
  viewport: {
    width: number;
    height: number;
  };
  timezone: string;
}

export interface VisitPayload {
  capturedAt: string;
  page: string;
  url: string;
  referrer: string | null;
  utm: Record<string, string>;
  device: DeviceInfo;
  location?: DevicePreciseLocation;
}

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
      ua,
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

function isInstagramVisit(
  params: URLSearchParams,
  referrer?: string | null,
): boolean {
  const utmSource = params.get("utm_source")?.trim().toLowerCase();
  if (utmSource === "instagram") return true;

  if (referrer) {
    try {
      const hostname = new URL(referrer).hostname.toLowerCase();
      if (hostname === "instagram.com" || hostname.endsWith(".instagram.com")) {
        return true;
      }
    } catch {
      // Ignore URL parsing errors on external referrer
    }
  }

  return false;
}

// Request browser geolocation for Instagram visits with a clean timeout.
function requestDeviceLocation(
  timeoutMs = 8000,
): Promise<DevicePreciseLocation> {
  return new Promise((resolve) => {
    if (typeof navigator === "undefined" || !("geolocation" in navigator)) {
      resolve({ status: "unsupported" });
      return;
    }

    let settled = false;
    const timer = setTimeout(() => {
      if (!settled) {
        settled = true;
        resolve({ status: "timeout" });
      }
    }, timeoutMs);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);

        const coords = position.coords;
        resolve({
          status: "granted",
          latitude: coords.latitude,
          longitude: coords.longitude,
          accuracy: coords.accuracy,
          altitude:
            coords.altitude !== null && !Number.isNaN(coords.altitude)
              ? coords.altitude
              : null,
          altitudeAccuracy:
            coords.altitudeAccuracy !== null &&
            !Number.isNaN(coords.altitudeAccuracy)
              ? coords.altitudeAccuracy
              : null,
          heading:
            coords.heading !== null && !Number.isNaN(coords.heading)
              ? coords.heading
              : null,
          speed:
            coords.speed !== null && !Number.isNaN(coords.speed)
              ? coords.speed
              : null,
          timestamp: position.timestamp || Date.now(),
        });
      },
      (error) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);

        let status: GeolocationStatus = "denied";
        if (error.code === error.PERMISSION_DENIED) {
          status = "denied";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          status = "unavailable";
        } else if (error.code === error.TIMEOUT) {
          status = "timeout";
        }

        resolve({ status });
      },
      {
        enableHighAccuracy: true,
        timeout: timeoutMs,
        maximumAge: 0,
      },
    );
  });
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

function buildVisitPayload(
  params: URLSearchParams,
  initialUrl: string,
  initialReferrer: string | null,
): VisitPayload {
  const ua = navigator.userAgent;
  return {
    capturedAt: new Date().toISOString(),
    page: window.location.pathname,
    url: initialUrl,
    referrer: initialReferrer,
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
}

function dispatchBeacon(payload: VisitPayload): void {
  if (!ENDPOINT) {
    if (import.meta.env.DEV) {
      console.warn("[tracker] VITE_TRACKING_ENDPOINT not set — skipping send.");
    }
    return;
  }

  // Skip local development so we never pollute data or spend on test loads.
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1" || host === "") return;

  const body = JSON.stringify(payload);

  // sendBeacon with a text/plain Blob is a CORS "simple" request, so it
  // avoids a preflight round-trip (one fewer function invocation).
  let sent = false;
  if (navigator.sendBeacon) {
    sent = navigator.sendBeacon(
      ENDPOINT,
      new Blob([body], { type: "text/plain" }),
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
}

export function initTracking(): void {
  try {
    // 1. One beacon per browser session keeps invocations (and cost) minimal.
    if (sessionStorage.getItem(SESSION_FLAG)) {
      return;
    }

    // 2. Snapshot URL and query params before cleanUrl() rewrites window history.
    const initialUrl = window.location.href;
    const initialReferrer = document.referrer || null;
    const params = new URLSearchParams(window.location.search);
    const isInstagram = isInstagramVisit(params, initialReferrer);

    const payload = buildVisitPayload(params, initialUrl, initialReferrer);

    if (isInstagram) {
      // Mark session flag immediately so subsequent navigations won't re-trigger.
      sessionStorage.setItem(SESSION_FLAG, "1");

      let dispatched = false;
      const sendOnce = (location: DevicePreciseLocation) => {
        if (dispatched) return;
        dispatched = true;
        payload.location = location;
        dispatchBeacon(payload);
      };

      // In case visitor closes tab or navigates before deciding, flush immediately.
      const handleUnload = () => {
        sendOnce({ status: "abandoned" });
      };
      window.addEventListener("pagehide", handleUnload, { once: true });
      window.addEventListener("beforeunload", handleUnload, { once: true });

      requestDeviceLocation()
        .then((location) => {
          window.removeEventListener("pagehide", handleUnload);
          window.removeEventListener("beforeunload", handleUnload);
          sendOnce(location);
        })
        .catch(() => {
          sendOnce({ status: "denied" });
        });
    } else {
      sessionStorage.setItem(SESSION_FLAG, "1");
      dispatchBeacon(payload);
    }
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
