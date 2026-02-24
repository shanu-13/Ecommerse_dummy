/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: "#0f0f0f",
          card: "#1a1a1a",
          gold: "#d4af37",
          soft: "#e5e5e5",
        },
      },
    },
  },
  plugins: [],
};