/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "350px",
        ms: "400px",
        mm: "560px",
        xxl: "1500px"
      },
      fontFamily: {
        "Amaranth": ["Amaranth", "serif"]
      }
    },
  },
  plugins: [],
}