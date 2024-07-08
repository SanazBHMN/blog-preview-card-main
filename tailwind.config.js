/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "hsl(47, 88%, 63%)",
      white: "hsl(0, 0%, 100%)",
      grey: "hsl(0, 0%, 50%)",
      black: "hsl(0, 0%, 7%)",
    },
    extend: {
      fontFamily: {
        Figtree: ["Figtree"],
      },
      boxShadow: {
        hard: "10px 10px 0px 0px hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
