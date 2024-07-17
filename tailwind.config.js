/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        19.25: '77px',
        1.125: '4.5px',
        1.5: '6px',
      },
      colors: {
        primary: '#00CCBC',
        secondary: '#828585',
      },
    },
  },
  plugins: [],
};
