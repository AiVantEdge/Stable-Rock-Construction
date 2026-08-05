import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://stablerockconstruction.com',
  trailingSlash: 'never',
  build: {
    // Emit /roofing.html as /roofing/index.html so clean URLs work on Vercel.
    format: 'directory',
  },
  integrations: [
    react(),
    sitemap(),
  ],
});
