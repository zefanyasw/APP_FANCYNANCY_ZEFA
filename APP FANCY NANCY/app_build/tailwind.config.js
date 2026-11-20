/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fancy: {
          pink: '#FF4D8D',
          rose: '#FF85A1',
          blush: '#FFF0F5',
          lavender: '#A855F7',
          lilac: '#E9D5FF',
          gold: '#D97706',
          gilded: '#FBBF24',
          cream: '#FFFBEB',
          berry: '#831843',
          mint: '#10B981',
          teal: '#0D9488'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        cursive: ['"Caveat"', 'cursive']
      },
      boxShadow: {
        'fancy': '0 10px 30px -5px rgba(255, 77, 141, 0.3)',
        'fancy-gold': '0 10px 30px -5px rgba(217, 119, 6, 0.25)',
        'vintage': '0 8px 24px -4px rgba(131, 24, 67, 0.15)'
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      }
    },
  },
  plugins: [],
}
