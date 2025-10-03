// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless'; // ✅ tambahkan adapter serverless Vercel

// https://astro.build/config
export default defineConfig({
  output: 'server',          // ✅ ubah agar SSR
  adapter: vercel(),         // ✅ gunakan adapter Vercel serverless

  integrations: [
    alpinejs(),
    react()
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
