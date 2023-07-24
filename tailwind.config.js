/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    '.**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-sans': ['Fira Sans', 'Arial', 'Times New Roman'],
      },
      screens: {
        'sm': '640px',
        'smmd': '768px',
        'md': '900px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
  plugins: [],
}
}
}