/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chivo: 'chivo',
        playfairDisplay: 'Playfair Display',
        concertOne: 'Concert One',
        fuzzyBubbles: 'Fuzzy Bubbles'
      }
    },
  },
  plugins: [],
}
