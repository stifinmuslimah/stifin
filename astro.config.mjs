// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/static';   // 👉 gunakan static adapter
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://stifinmuslimah.com',          // wajib untuk sitemap
  adapter: vercel(),
  integrations: [
    alpinejs(),
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: true
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
