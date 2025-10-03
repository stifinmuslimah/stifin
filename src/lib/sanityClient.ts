import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "ui98z82j",
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: "2025-10-03",
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN, // ← jangan hardcode token di sini
});
