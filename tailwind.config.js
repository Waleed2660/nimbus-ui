/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: "dark",
  theme: {
    extend: {
      colors: {
        primary: "#404258",
        secondary: "#474E68",
        mainBackground: "#111827",
        sideBar: "#1f2937",
        navBar: "#1f2937",
        navBarButtonBackground: "#323e4f",
      },
      fontFamily: {
        sans: ['"Segoe UI"'],
      },
    },
  },
  plugins: [],
};
