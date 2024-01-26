/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.page': {
          display: 'inline-flex',
          flex: '1 1 0%',
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
        '.max-container': {
          margin: '0 auto',
          width: '100%',
          maxWidth: theme('screens.sm'),
        },
        '.hide-scroll': {
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.hide-search-decoration': {
          '&::-webkit-search-cancel-button': {
            appearance: 'none',
          },
          '&::-webkit-search-decoration': {
            appearance: 'none',
          },
          '&::-ms-clear': {
            display: 'none',
          },
        },
      });
    }),
  ],
};
