/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Serif Display", "serif"],
      },
      backgroundImage: {
        hero: "url('src/assets/landingPage/pexels-chris-f-1283219.jpg')",
      },
    },
  },
  plugins: [],
};
