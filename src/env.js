export const VITE_LOCAL_HOST = import.meta.env.VITE_LOCAL_HOST;
export const VITE_PROD_HOST = import.meta.env.VITE_PROD_HOST;
export const VITE_ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;

let HOST = VITE_ENVIRONMENT === "local" ? VITE_LOCAL_HOST : VITE_PROD_HOST;
export { HOST };
