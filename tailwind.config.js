/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        sliding:{
          '0%':{left:'-100%'},
          '100%': {left:'100%',margin:'0 -35px 0 35px'},
        }
      },

      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },

      backgroundImage: {
        'black-gray': 'linear-gradient(90deg, rgba(0,0,0,1) 40%, rgba(31,41,55,1) 100%)' ,
        'gray-black': 'linear-gradient(90deg, rgba(31,41,55,1) 4%, rgba(0,0,0,1) 100%)',
        'black-top':'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(31,41,55,1) 100%)',
        'black-top2':'linear-gradient(0deg, rgba(0,0,0,1) 12%, rgba(149,149,149,1) 85%)'
      },

      animation: {
        'animation-bounce': 'bounce 5s infinite',
        'animation1-bounce': 'bounce 1s infinite ',
        'sliding':'sliding 3s  infinite'
      }
    },
  },
  plugins: [],
}

