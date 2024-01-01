/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/comps/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#5552B9',
        secondary: '#E0E0E3',
        accent: '#939297',
      }
    },
  },
  plugins: [],
}
