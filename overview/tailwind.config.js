module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      color:{
        'dark-grey':'#515452',
        'grey-test':'#EAEBEA',
      },
      
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }