/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updated color palette
        'orion-dark': '#1e1f33',
        'orion-darker': '#1a1b2d',
        'orion-blue': '#6f7ded',
        'orion-blue-light': '#8a98f1',
        'orion-blue-dark': '#5d6be0',
        'orion-gray': '#8B949E',
        'orion-gray-light': '#C9D1D9',
        'orion-gray-dark': '#30363D',
        'orion-border': '#2a2b45',
        'orion-text': '#F0F6FC',
        'orion-text-secondary': '#8B949E',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'orion': '0 0 0 1px rgba(255, 255, 255, 0.1)',
        'orion-glow': '0 0 20px rgba(111, 125, 237, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}