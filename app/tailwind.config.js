/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/typography'),
  require('daisyui'), 
],
  daisyui: {
    themes: ["aqua", "autumn", "pastel"],
  },
}

