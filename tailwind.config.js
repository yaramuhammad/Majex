/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { colors: {
      'custom-red': '#a11d20',
    },},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


