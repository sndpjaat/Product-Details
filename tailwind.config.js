/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Roboto' : ['Roboto' , 'sans-serif'],

        'Poppins' : ['Poppins' , 'sans-serif'],

      },
      boxShadow:{
        'gray2':[' 3px 5px 22px 0px #00000014']
      }

    },
  },
  plugins: [],
}

