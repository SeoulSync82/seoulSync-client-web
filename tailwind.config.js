/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        30: ['30px', '100%'],
        24_32: ['24px', '32px'],
        24: ['24px', '100%'],
        20_28: ['20px', '28px'],
        20: ['20px', '100%'],
        19_28: ['19px', '28px'],
        18_28: ['18px', '28px'],
        18: ['18px', '100%'],
        17_28: ['17px', '28px'],
        16_24: ['16px', '24px'],
        16: ['16px', '100%'],
        15: ['15px', '100%'],
        14_24: ['14px', '24px'],
        14_22: ['14px', '22px'],
        14_19: ['14px', '19px'],
        14: ['14px', '100%'],
        12_18: ['12px', '18px'],
        12: ['12px', '100%'],
        10_14: ['10px', '14px'],
        10: ['10px', '100%'],
      },
      animation: {
        loading: 'loading 0.5s infinite linear alternate',
      },
      keyframes: {
        loading: {
          '0%': { boxShadow: '30px 0 #9070CF, -30px 0 #E1D9F2', background: '#9070CF' },
          '33%': { boxShadow: '30px 0 #9070CF, -30px 0 #E1D9F2', background: '#E1D9F2' },
          '66%': { boxShadow: '30px 0 #E1D9F2,-30px 0 #9070CF', background: '#E1D9F2' },
          '100%': { boxShadow: '30px 0 #E1D9F2,-30px 0 #9070CF', background: '#E1D9F2' },
        },
      },
    },
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
