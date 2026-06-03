/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/views/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#92400e",
        secondary: "#1c1917",
        accent: "#f59e0b"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};