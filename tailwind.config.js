/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',  // Couleur bleue personnalisée
        secondary: '#F472B6',  // Couleur rose personnalisée
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}