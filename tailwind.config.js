/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'animation-bounce': 'bounce 5s infinite',
        'animation1-bounce': 'bounce 1s infinite ',
      }
    },
  },
  plugins: [],
}

