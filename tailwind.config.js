/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}",'*.{html,js}'],
  theme: {
    extend: {
      colors:{
        thBlue: '#35EEED',
        thOrange: '#F9A23F',
        thPurple: '#ED02FF',
        thWeakblack: '#000000cf'
      }
    },
  },
  plugins: [],
}
