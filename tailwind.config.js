/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['lato', 'sans-serif'],
      display: ['belleza']
    },
    fontSize: {
      lg: '3rem',
      xl: '10rem'
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      purple: '#3955B9',
      lightpurple: '#79A0FF',
      point: '#FF9A51'
    },
    extend: {}
  },
  plugins: []
}
