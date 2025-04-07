/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1785px'
    },
    extend: {
      colors: {
        "neon-green": "#39ff14",
      },
    },
  },
  plugins: [],
};
