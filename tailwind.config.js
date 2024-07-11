/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "light-pink": "#FFC7ED",
        "slate-gray": "#6D6D6D",
        "pale-green": "#50B498",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
    },
  },
  plugins: [],
}