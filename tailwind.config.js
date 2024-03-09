/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F1EDF9',
          100: '#E1D9F2',
          200: '#CDBEE9',
          300: '#BBA8E2',
          400: '#A78ED9',
          500: '#9070CF',
          600: '#805BC8',
          700: '#683EBB',
          800: '#553399',
          900: '#392266',
        },
        gray: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#DEE2E6',
          300: '#ADB5BD',
          400: '#6D757D',
          500: '#5F666D',
          600: '#51575C',
          700: '#3B4044',
          800: '#31363A',
          900: '#212529',
        },
        kakao: '#F5DA35',
        naver: '#4DA524',
        google: '#F3F3F3',
      },
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
