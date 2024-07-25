/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'x' : {'max':'380px'},
    },
    extend: {},
  },
  plugins: [],
}