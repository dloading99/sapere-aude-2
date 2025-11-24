/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,html}'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6EF',
        petrol: '#13424B',
        coral: '#C24A3A',
        coralHover: '#A83E30',
        accent: '#F3B27C',
        surface: '#FFFBF7'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
