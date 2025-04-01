//tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Tailwind v3+
  theme: {
    extend: {
      colors: {
        primary: '#000000',     // Black
        secondary: '#b74bb4'    // Specific red shade
      }
    },
  },
  plugins: [],
}