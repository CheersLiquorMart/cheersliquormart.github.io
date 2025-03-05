/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        primary: '#065f46', // emerald-800
=======
        primary: '#1a4d2e',
>>>>>>> 80712360970f9a088717ab05020317d8d06202e8
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}