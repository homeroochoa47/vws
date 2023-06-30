/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  darkMode: 'class',
  theme: {
    objectPosition: {
      'right-5': 'center right 10rem',
      'top-4': 'center top 1rem',
    },
    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'black': '#191719',
      'red': '#C65956',
      'charcoal': '#3B393A',
      'light-grey': '#CBCBCB',
      'dark-grey': '#222022',
      'darkest-grey': '#1D1B1D',
      'green': '#5EB386',
      'lighter-grey': '#EAEAEA',
      '': '',
      

    },
    extend: {
      dropShadow: {
        'hero-caption-1': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'hero-header': '-4px 4px 0px rgba(0, 0, 0, 0.25)',
        'hero-caption-2': '-2px 2px 1px rgba(0, 0, 0, 0.5)',
        'services-box': '0px 0px 10px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'home-hero': "linear-gradient(to right bottom, rgba('#7ed56f'), rgba('#1E1E1E',0.1)), url('/home-hero.jpg')",
      },
    },
    fontFamily: {
      one: ["var(--font-maven)"],
      two: ["var(--font-actor)"],
      three: ["var(--font-nunito)"],
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require('preline/plugin'),
  ],
}
