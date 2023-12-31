/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.vue'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Anybody', 'sans-serif'],
      'gothic': ['Carrois Gothic', 'sans-serif'],
      'unbounded': ['Unbounded', 'sans-serif'],
      'raleway': ['Raleway', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    screens: {
      'xs': '475px'
    }
  },
  plugins: [require('daisyui')]
}

