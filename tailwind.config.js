/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans1: "Poppins",
      },
      colors: {
        primary1: "#8A8A8A",
        primary2: "#7126B5",
        primary3: "#FFE9CA",
        button1: "#7126B5",
        primary5: "#FF0000",
        purple: "#7126B580",
        purple2: "#E2D4F0",
      },
      fontWeight: {
        primary1: "20px"
      }
    },
  },
  plugins: [],
}

