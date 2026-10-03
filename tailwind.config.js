/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bubble: {
          pink: '#FF70A6',
          orange: '#FF9770',
          yellow: '#FFD670',
          green: '#E9FF70',
          teal: '#70D6FF',
          purple: '#B794F4',
        }
      },
      fontFamily: {
        child: ['"Nunito"', 'Comic Sans MS', 'sans-serif'],
      },
      animation: {
        'bounce-gentle': 'bounce 2s infinite',
        'wiggle': 'wiggle 0.8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
