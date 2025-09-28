import { defineConfig } from "tinacms";

// Ambil nama branch (untuk preview deployment)
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Gunakan import.meta.env untuk variabel PUBLIC_* agar terbaca di client
  clientId: import.meta.env.PUBLIC_TINA_CLIENT_ID,

  // Token private hanya untuk server (tidak terbaca di browser)
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
            label:
              "Kategori (Pilih salah satu : Artikel, Berita, Parenting, Karir, Inspirasi, Pernikahan, Testimoni)",
            required: true,
            // Jika ingin dropdown, bisa tambah opsi berikut:
            options: [
              "Artikel",
              "Berita",
              "Parenting",
              "Karir",
              "Inspirasi",
              "Pernikahan",
              "Testimoni",
            ],
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
