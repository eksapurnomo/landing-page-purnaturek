/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botanical: {
          950: '#0C1A13',
          900: '#132A1F',
          800: '#1B3B2B',
          700: '#264E3A',
          600: '#35664D',
          500: '#4A8064',
          400: '#6E9E85',
          300: '#9BBCAE',
          200: '#C5D8CE',
          100: '#E3ECE7',
          50: '#F2F6F4',
        },
        cream: {
          50: '#FCFBF8',
          100: '#F7F4EC',
          200: '#EFEADF',
          300: '#E4DDD0',
          400: '#D2C8B5',
          500: '#B8AB94',
        },
        earth: {
          600: '#8C6D46',
          500: '#A48354',
          400: '#C2A477',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', ' Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'editorial': '0 20px 50px -15px rgba(19, 42, 31, 0.08)',
        'modal': '0 25px 70px -15px rgba(12, 26, 19, 0.45)',
      }
    },
  },
  plugins: [],
};

