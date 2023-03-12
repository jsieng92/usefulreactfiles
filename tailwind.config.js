/*tailwind.config.js*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  mode: "jit",
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(50, 5, 5, 0.85)',
        '4xl': '0 50px 50px rgba(100, 5, 5, 0.85)'
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      "ms": {"max":"320px"},
      "mm": {"min":"321px", "max":"375px"},
      "ml": {"min":"376px", "max":"425px"},
      "mobile": {"max":"425"},
      "tablet": {"min":"426px", "max":"768px"},
      "laptop": {"min":"769px", "max":"1024px"},
      "desktop": {"min":"1025px", "max":"1440px"}, 
      "screen": {"min":"1441px"}

    },
  },
  plugins: [],
};
