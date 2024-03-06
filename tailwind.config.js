/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens
    },
    extend: {
      backgroundImage: {
        'mobile-image-1': "url('/mobile-image-hero-1.jpg')",
        'mobile-image-2': "url('/mobile-image-hero-2.jpg')",
        'mobile-image-3': "url('/mobile-image-hero-3.jpg')",
        'desktop-image-1': "url('/desktop-image-hero-1.jpg')",
        'desktop-image-2': "url('/desktop-image-hero-2.jpg')",
        'desktop-image-3': "url('/desktop-image-hero-3.jpg')",
      }
    },
  },
  plugins: [],
}

