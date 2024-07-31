import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tahiti: {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        white: '#FFFFFF',
        current: 'currentColor',
        transparent: 'transparent',
      },
      fontFamily: {
        sans: ['Inter-400', 'sans-serif'],
        'inter-500': ['Inter-500', 'sans-serif'],
        'inter-600': ['Inter-600', 'sans-serif'],
        'inter-700': ['Inter-700', 'sans-serif'],
      },

      fontSize: {
        sm: ['14px', '1.4'],
        base: ['16px', '1.5'],
        lg: ['18px', '1.5'],
        xl: ['20px', '1.2'],
        '2xl': ['24px', '1.3'],
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '-1px',
        xl: '1440px',
        '2xl': '-1px',
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
      },
    },
  },
  plugins: [],
};

export default config;
