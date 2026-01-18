/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        gothic: ['UnifrakturMaguntia', 'cursive'],
      },
      colors: {
        blood: {
          900: '#5a0000',
          800: '#8B0000',
          700: '#b22222',
        },
        dark: {
          950: '#0a0a0a',
          900: '#1a0a0a',
          800: '#2a0a0a',
        }
      },
      animation: {
        'blood-drop': 'bloodDrop 2s infinite',
        'gothic-light': 'gothicLight 25s infinite linear',
      },
      keyframes: {
        bloodDrop: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.7' },
          '50%': { transform: 'translateY(3px)', opacity: '1' },
        },
        gothicLight: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}