/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burlywood: {
          DEFAULT: '#DBA46B',
          light: 'rgba(218, 163, 111, 0.15)',
          dark: '#C8924F',
        },
        pink: {
          soft: '#FFBFC9',
          light: 'rgba(255, 198, 206, 0.12)',
          mist: 'rgba(255, 224, 229, 0.8)',
        },
        gray: {
          warm: '#7F7878',
          light: '#F4F4F4',
          pale: '#F9F9F9',
          line: '#E2E2E2',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        chivo: ['Chivo', 'sans-serif'],
        copse: ['Copse', 'serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
