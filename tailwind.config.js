/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": ["playfair-display"], 
        "identification-05": ["identification-05"],
      },
    },
  },
  plugins: [],
};
