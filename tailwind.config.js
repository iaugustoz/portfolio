const { transform } = require('typescript');

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
      keyframes: {
        shake:{
          '0%, 100%': {
            transform: 'rotate(-20deg)'
          },
          '50%': {
            transform: 'rotate(20deg)'
          }
        },
      },
      animation: {
        "shake": "shake .7s",
      },
      boxShadow: {
        'all': '0 0 20px 5px rgba(57, 255, 20, 0.5)'
      },
      colors: {
        "neon-green": "#39ff14",
      },
    },
  },
  plugins: [],
};
