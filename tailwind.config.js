/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jumbotron-bg-image': 'url(../public/hero-1920.png)'
      },
      colors: {
        'primary': '#E2E5DE',
        'primaryDark': '#808080',
        'logo': '#edebeb',
        'bg1': '#4c05b0',
      }
    },
  },
  plugins: [],
}
