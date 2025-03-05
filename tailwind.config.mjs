/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a4d2e',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}