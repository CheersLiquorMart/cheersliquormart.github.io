import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: "/cheersliquormart.github.io/",  // Set this to match your repo name
  output: "static",  // Ensures Astro generates a static site
  integrations: [tailwind()],
});
