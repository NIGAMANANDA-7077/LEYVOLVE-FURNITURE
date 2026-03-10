/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a", // Deep luxury black/gray
        secondary: "#f5f5f5", // Off-white
        accent: "#d4af37", // Gold/Bronze accent if needed, though clean monochrome is preferred
        "surface-dark": "#0f0f0f",
        "surface-light": "#ffffff",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}
