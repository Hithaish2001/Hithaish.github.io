/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'black-gray': 'linear-gradient(90deg, rgba(0,0,0,1) 4%, rgba(31,41,55,1) 100%)' ,
        'gray-black': 'linear-gradient(90deg, rgba(31,41,55,1) 4%, rgba(0,0,0,1) 100%)'
      },
      animation: {
        'animation-bounce': 'bounce 5s infinite',
        'animation1-bounce': 'bounce 1s infinite ',
      }
    },
  },
  plugins: [],
}

