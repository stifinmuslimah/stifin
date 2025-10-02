// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import react from '@astrojs/react';        // ✅ tambahkan ini
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs(),
    react()                                // ✅ tambahkan ini
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
