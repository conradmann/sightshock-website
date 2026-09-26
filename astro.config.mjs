import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.sightshock.com',
  output: 'static',
  build: { assetsPrefix: './' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
