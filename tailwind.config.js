module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Trade Winds', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      blue: '#264653',
      green: '#2A9D8F',
      orange: '#EAFF68',
      lightBlue: '#6F63FF',
      gray: '#F5F5F5',
      darkGray: '#E3E3E3',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
