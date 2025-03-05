import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
<<<<<<< HEAD
  integrations: [tailwind()],
  site: 'https://cheersliquormart.github.io',
  base: '/',
});
=======
  base: "/cheersliquormart.github.io/",  // Set this to match your repo name
  output: "static",  // Ensures Astro generates a static site
  integrations: [tailwind()],
});
>>>>>>> 80712360970f9a088717ab05020317d8d06202e8
