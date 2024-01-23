/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo Play', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        white: '#ffffff',
        indigo: '#3F13A6',
        darkPurple: '#32004F',
        midnightPurple: '#220135',
        deepBlack: '#121212',
        black: '#000000',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [require('preline/plugin')],
}
