module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        100: '100px',
        150: '150px',
        200: '200px',
        480: '480px',
        400: '400px',
        450: '450px',
        350: '350px',
        650: '650px',
        '3/10': '30%',
        3.5: '3.5rem',
      },
      maxHeight: {},
      screens: {
        desktop: '1440px',
      },
      minWidth: {
        250: '250px',
        500: '500px',
      },
      maxWidth: {
        350: '350px',
      },
      width: {
        300: '300px',
        350: '350px',
        400: '400px',
        450: '450px',
        500: '500px',
        550: '550px',
        600: '600px',
        650: '650px',
      },
      opacity: {
        15: '0.15',
      },
      colors: {
        'light-gray': '#747474;',
        'main-green': '#6EB751;',
        'creamy': '#FFFBE6',
        'dark-gray': '#18191F',
        'gray-white':'#E5E5E5',
        'darker-gray':'#7A7A7A',
        'darker-green': '#4F8669'
      },
      zIndex: {
        1: '1',
        2: '2',
        '-1': '-1',
      },
      inset: {
        250: '250px',
        '2/12': '16.66667%',
        '2/5': '40%',
      },
    },
  },
  variants: {},
  plugins: [],
};
