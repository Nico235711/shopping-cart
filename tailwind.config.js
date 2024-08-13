/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'outrageous-orange': {
          '50': '#fff2ed',
          '100': '#ffe1d4',
          '200': '#ffc0a8',
          '300': '#ff9471',
          '400': '#ff5833',
          '500': '#fe3211',
          '600': '#ef1907',
          '700': '#c60c08',
          '800': '#9d0f11',
          '900': '#7e1012',
          '950': '#44060a',
        },

      }
    },
  },
  plugins: [],
}