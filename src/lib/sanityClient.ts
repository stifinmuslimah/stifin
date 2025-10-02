import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "af0c2km4",   // ganti sesuai sanity.config.ts
  dataset: "production",
  apiVersion: "2023-10-01",
  useCdn: false
});
