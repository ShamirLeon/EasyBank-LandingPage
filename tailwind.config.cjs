/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        DarkBlue: '#2D314C',
        LimeGreem: '#30D35C',
        BrightCyan: '#2AB6D9',
        GrayishBlue: '#9698A5',
        LightGrayishBlue: '#F3F4F6',
        VeryLightGray: '#F9F9F9',
      },

      fontFamily:{
        'PublicSans': 'Public Sans'
      },

      backgroundImage:{
        'heroDesktop':"url(./src/assets/icons/bg-intro-desktop.svg)",
        'heroMobile':"url(./src/assets/icons/bg-intro-mobile.svg)"
      }

    },
  },
  plugins: [],
}
