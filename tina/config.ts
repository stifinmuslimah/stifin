import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Post",
        path: "src/content/blog/",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Judul Artikel",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Deskripsi Singkat Artikel - Kurang dari 150 karakter",
            required: true,
          },
          {
            type: "string",
            name: "image",
            label: "Gambar Artikel",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Tanggal Publikasi",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Kategori (Pilih salah satu : Artikel, Berita, Parenting, Karir, Inspirasi, Pernikahan, Testimoni)",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Artikel Lengkap",
            isBody: true,
          },
        ],
      },
    ],
  },
});
