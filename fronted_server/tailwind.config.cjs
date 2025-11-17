/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        whatsapp: {
          DEFAULT: '#25D366'
        }
      }
    }
  },
  plugins: []
}
