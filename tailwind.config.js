/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    '.**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'arsenal': ['Arsenal', 'Arial', 'Times New Roman'],
        'royale': ['Bonheur Royale', 'Arial', 'Times New Roman'],
      },
      screens: {
        'sm': '640px',
        'smmd': '768px',
        'md': '900px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'slide-menu': 'slide 0.8s ease-out',
  },
  plugins: [],
}
}
}