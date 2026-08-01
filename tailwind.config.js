/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0a',
          soft: '#111111',
          card: '#161412',
        },
        gold: {
          DEFAULT: '#D4A030',
          light: '#E8C468',
          dark: '#B8862A',
        },
        line: '#2a2620',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Oswald', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #B8862A 0%, #E8C468 50%, #B8862A 100%)',
      },
    },
  },
  plugins: [],
}
