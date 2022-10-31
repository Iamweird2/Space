/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "374px",
      sm: "640px",
      md: "768px",
      mdx: "769px",
      lg: "1023px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontFamily: {
      barlowreg: "Barlow Regular",
      barlow: "Barlow Condensed",
      bellefair: "Bellefair",
    },
    extend: {
      colors: {
        sideBar: "rgba(255, 255, 255, 0.04)",
      },
      backgroundImage: {
        "mobile-home": "url('/assets/home/background-home-mobile.jpg')",
        "tablet-home": "url('/assets/home/background-home-tablet.jpg')",
        "desktop-home": "url('/assets/home/background-home-desktop.jpg')",

        "mobile-destination":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "tablet-destination":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "desktop-destination":
          "url('/assets/destination/background-destination-desktop.jpg')",

        "mobile-crew": "url('/assets/crew/background-crew-mobile.jpg')",
        "tablet-crew": "url('/assets/crew/background-crew-tablet.jpg')",
        "desktop-crew": "url('/assets/crew/background-crew-desktop.jpg')",

        "mobile-technology":
          "url('/assets/technology/background-technology-mobile.jpg')",
        "tablet-technology":
          "url('/assets/technology/background-technology-tablet.jpg')",
        "desktop-technology":
          "url('/assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
