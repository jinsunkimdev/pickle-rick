module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Patrick Hand SC"', 'cursive']
      },
      'animation':{
        'gradient-x':'gradient-x 15s ease infinite',
      },
      'keyframes': {
        'gradient-x': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
      },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
