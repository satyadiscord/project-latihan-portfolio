/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1300px",
      },
    },
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
      },
      colors: {
        primary: "#FF6464",
        secondary: "#00A8CC",
        dark: "#21243D",
        light: "#8695A4",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
