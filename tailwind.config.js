/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: 'dark',
  theme: {
    extend: {
      colors: {
        primary: "#27374D",
        secondary: "#526D82"
      }
    },
  },
  plugins: [],
}

