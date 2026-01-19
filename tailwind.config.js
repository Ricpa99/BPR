/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-text': '#3B3A4C',
        'brand-background': '#F1F3E0',
        'brand-gold': '#AA8549',
        'card-background': '#f8f8f8ff',
      },
      boxShadow: {
        'custom-gold': '0 3px 5px 0 rgba(52, 55, 60, 0.25)',
        'card-shadow': '0 5px 12.8px 4px rgba(172, 171, 183, 0.25)',
        'card-advantage': '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        'facility-shadow': '0 4px 5px 0 rgba(52, 55, 60, 0.25)',
      },
    },
  },
  plugins: [],
}
