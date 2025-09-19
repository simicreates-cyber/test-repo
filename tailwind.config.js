/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#798188",
          default: "#000000",
          accent: "#b99365",
          price: "#ffc107",
          bg: "#f8f9fa",
          foot: "#f2f2f2",
          darkFoot: "#2A2D34",
          darkBg: "#1E2A34",
          blog: "#070605",
        },
      },
      fontFamily: {
        playFair: ["Playfair Display", "serif"], 
        libre: ["Libre Baskerville", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
