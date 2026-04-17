// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://privalon.github.io',
  base: '/site',
  output: 'static',
  server: {
    allowedHosts: true,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
