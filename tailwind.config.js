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
      'gothic': ['Pathway Gothic One', 'sans-serif'],
      'unbounded': ['Unbounded', 'sans-serif'],
      'raleway': ['Raleway', 'sans-serif'],
    }
  },
  plugins: [require('daisyui')],
}

