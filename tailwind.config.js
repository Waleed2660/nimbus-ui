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
        primary: "#f2f2f2",
        secondary: "#e9e8e8"
      }
    },
  },
  plugins: [],
}

