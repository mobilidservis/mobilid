/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'main-gold': '#D09F1F',
        'main-red': '#CC0000'
      },
      spacing: {
       'md-screen': '60px'
      },
    },
    fontFamily: {
      sans: ['Be Vietnam Pro', 'sans-serif'],
      epilogue: ['Epilogue', 'serif'],
    },
  },
  plugins: [],
}

