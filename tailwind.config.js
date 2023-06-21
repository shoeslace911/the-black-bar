/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        text: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/landingPage/blackBarBackground3.png')",
      },
    },
  },
  plugins: [],
};
