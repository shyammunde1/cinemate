/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        other: { min: "340px", max: "1200px" },
      },
      colors: {
        darkbg: "#1E293B",
        red:{
          400: '#f87171'
        },
        slate:{
          900:'#0f172a'
        }
      },
    },
  },
  plugins: [],
};
