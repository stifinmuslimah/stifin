// @ts-check
import { defineConfig } from 'astro/config'
import alpinejs from '@astrojs/alpinejs'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel/static'      // ✅ adapter static untuk Vercel
import sitemap from '@astrojs/sitemap'           // ✅ plugin sitemap resmi

export default defineConfig({
  // Pastikan URL ini sesuai dengan domain final
  site: 'https://stifinmuslimah.com',

  // Gunakan static adapter supaya tidak ada serverless function
  adapter: vercel(),

  // Integrasi yang dipakai
  integrations: [
    alpinejs(),
    react(),
    sitemap({
      entryLimit: 5000,      // jika halaman banyak, dibagi max 5000 per file
      changefreq: 'weekly',  // rekomendasi update sitemap
      priority: 0.7,         // prioritas default
      lastmod: true          // otomatis isi tanggal modifikasi terakhir
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
})
