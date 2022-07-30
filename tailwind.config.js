/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    fontFamily: {
      primary: ['"Noto Sans"', "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FF385C",
        pritext: "#4c4c4c",
      },
    },
  },
  plugins: [],
};
