/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
        fontFamily: {
    brand: ["Tinkoff Sans", "system-ui", "sans-serif"],
  },
    },
  },
  plugins: [],
}
