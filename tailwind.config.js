module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '970px',
      'xl': '1240px',
      'xxl': '1320px',
    },
    colors: {
      'primary': '#2c3095',
      'secondary': '#59c0ff',
      'gray': {
        100: '#f8f9fa',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      }
    }
  },
  plugins: [
    require('daisyui')
  ],
}
