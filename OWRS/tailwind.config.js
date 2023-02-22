/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'sky-300': '#ADDFF6',
        'sky-400': '#60C2EF',
        'sky-500': '#0ea5e9',
        'sky-600': '#0284c7',
        'green-400': '#61C454',
        'green-500': '#84cc16',
        'green-600': '#65a30d',
        'red-500': '#EE6A5F',
        'red-600': '#dc2626',
        'amber-500': '#f59e0b',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'yellow': '#F5C451',
        'neutral-500': '#D9D9D9',
        'neutral-600': '#666666',
        'purple': '#908BF2',
        'white': '#FFFFFF',

      },
  },
  plugins: [],
}
