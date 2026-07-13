/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Firebase Cloud Function URL that receives visit beacons. */
  readonly VITE_TRACKING_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
