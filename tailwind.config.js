/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#a11d20",
        "hover":"#7f1d1d",
        "grey":"#D9D9D9"
      }
    },
  },
  plugins: [],
}