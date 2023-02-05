export const AppConfig = {
  apiUrl: import.meta.env.VITE_API_SERVER_URL,
  auth: {
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
  },
};
