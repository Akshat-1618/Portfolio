/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0C',
          soft: '#0D0D10',
        },
        surface: {
          DEFAULT: '#131316',
          2: '#1C1C21',
          border: '#26262C',
        },
        ink: {
          DEFAULT: '#F2F2F0',
          soft: '#C7C7CE',
          faint: '#8B8B94',
        },
        accent: {
          DEFAULT: '#5B8DFF',
          soft: '#8FB0FF',
          dim: '#2A3A66',
        },
        amber: {
          DEFAULT: '#FFB454',
          dim: '#4A3A22',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(91, 141, 255, 0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 24px -12px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(to bottom, transparent, rgba(10,10,12,1))',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
