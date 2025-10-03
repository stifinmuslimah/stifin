import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "ui98z82j", // ganti sesuai yang di dashboard project baru
  dataset: "production",
  apiVersion: "2023-10-01",
  useCdn: false,
  token: "sk8QOvCRJzulDj6CcnHZrhgjK6EM6T35QAZE2Nznjm2ti0L1ZBGMgCcBm9BOcdgjp6ADHMGluAUAU2pZ6QnAMoy0rzYskHYN929FTCCpLrewu7CP4LFVi03OtXR3IHSiEdkgfsXz6NsIXSre4rUFwi4rXvIfJhQy7ZSuDf7J0fQk4ngcDlvH" // ← tambahkan token baru
});
