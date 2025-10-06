// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';   // ✅ adapter Vercel
import sitemap from '@astrojs/sitemap';             // ✅ sitemap otomatis

// https://astro.build/config
export default defineConfig({
  site: 'https://stifinmuslimah.com', // ✅ WAJIB untuk sitemap & tag canonical
  output: 'server',                   // ✅ SSR mode
  adapter: vercel(),                  // ✅ gunakan adapter serverless Vercel

  integrations: [
    alpinejs(),
    react(),
    sitemap({                         // ✅ Sitemap otomatis
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: true
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
