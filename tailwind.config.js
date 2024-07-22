/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EFD9C0',
        black: '#101010',
        secondary: '#fdecd8'
      },
      fontFamily: {
        display: 'Oswald', // Adds a new `font-display` class
      },
      listStyleImage: {
        checkmark: 'url("/src/assets/img/checkmark.png")',
      },

    },
    
  },
  plugins: [],
}
