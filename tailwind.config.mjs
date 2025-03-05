/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#065f46', // emerald-800
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}