/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '100': '40rem',
        '128': '48rem',
      },
      colors: {
        "pinkish": '#ff057c',
        "greykish": '#8d0b93',
        "darkish": '#321575'
      }
    },
  },
  plugins: [],
}
