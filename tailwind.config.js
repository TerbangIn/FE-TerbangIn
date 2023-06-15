/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin:{
        '2.5': '10px',
        '4.1': '17px',
        '4.5': '18px',
        '6.5': '26px',
        '8.5': '34px',
        '14,5': '61px',
        '25': '105px',
        '27': '110px',
        '31': '126px',
        '43': '174px',
        '65': '260px',
        '65.5': '276px',
        '66': '278px',
        '71': '301px',
        '73': '300px',
        '31': '135px',
        '100': '958px',
      },
      width:{
        '7.5': '30px',
        '96.5': '454px',
        '97': '486px',
        '98': '518px',
        '99': '936px',
      },
      height:{
        '7.5': '30px',
        '12.5': '50px',
        '97': '498px',
      },
      colors:{
        'light-gray': 'rgba(138, 138, 138, 1)',
        'white': '#FFFFFF',
        'black1': 'rgba(60, 60, 60, 1)',
        'purple1': 'rgba(75, 25, 121, 1)',
        'green': 'rgba(115, 202, 92, 1)',
        'danger': 'rgba(255, 0, 0, 1)',
      },
      boxShadow:{
        'bm': '0px 0px 10px rgba(0, 0, 0, 0.15)',
      },
      fontSize:{
        'xl1': ['20px','30px'],
        '1xl': ['20px', '30px'],
        'base1': ['16px','20px']
      },
      padding:{
        '2.1': '9px',
        '4.1': '17px',
        '6.5': '26px',
        '65': '260px',
      }
    },
  },
  plugins: [],
}

