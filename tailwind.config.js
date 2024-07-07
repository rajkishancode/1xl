/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFAA00",
        secondary: "#FFE55E",
        tertiary: "#FFFAE5",
        complementary: {
          primary: "#124C5F",
          secondary: "#A0D6E7",
          tertiary: "#C7E7E1",
        },
        splashBg: "#FFF2B357", // Add the splash background color
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      spacing: {
        50: "50px",
      },
    },
  },
  plugins: [],
};
