export const BASE_API_URL = "https://api.spotify.com";
export const BASE_URL =
  process.env.NEXT_PUBLIC_NODE_ENV === "production"
    ? ""
    : "http://localhost:3000";
