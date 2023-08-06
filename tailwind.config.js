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
    },
    colors: {
      'purple-1': '#333CA5',
      'purple-2': '#444EC5',
      'purple-3': '#9298DD',
      'orange': '#F26800',
      'black-1': '#14140F',
      'black-2': '#1D1D16',
      'black-3': '#26261C',
      'black-4': '#575742',
      'white-1': '#CDCDCD',
      'white-2': '#D4D4D4',
      'white-3': '#E3E3E3'
    }
  },
  plugins: [require('daisyui')]
}

