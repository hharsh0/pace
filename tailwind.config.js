/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FDD1D9",
          200: "#FBA4BC",
          300: "#F575A5",
          400: "#EB519B",
          500: "#DE1D8D",
          600: "#BE1588",
          700: "#9F0E7F",
          800: "#800972",
          900: "#6A0568",
        },
        "primary-color": {
          100: "#FDD1D9",
          200: "#FBA4BC",
          300: "#F575A5",
          400: "#EB519B",
          500: "#DE1D8D",
          600: "#BE1588",
          700: "#9F0E7F",
          800: "#800972",
          900: "#6A0568",
        },
        "primary-color-dark": {
          100: "#FDD1D9",
          200: "#FBA4BC",
          300: "#F575A5",
          400: "#EB519B",
          500: "#DE1D8D",
          600: "#BE1588",
          700: "#9F0E7F",
          800: "#800972",
          900: "#6A0568",
        },
        "background-color": "#000",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
