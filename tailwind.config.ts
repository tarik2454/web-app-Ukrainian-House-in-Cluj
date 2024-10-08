import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: {
          100: '#667085',
          200: '#1A1A1A',
          300: '#090D1F',
          '100_34': 'rgba(0, 0, 0, 0.34)',
        },
        green: {
          100: '#ECFDF3',
          200: '#027A48',
        },
        pink: {
          100: '#FDF2FA',
          200: '#C11574',
        },
        red: {
          100: '#FFF1F3',
          200: '#C01048',
          500: '#ef4444',
          700: '#b91c1c',
        },
        blue: {
          100: '#EEF4FF',
          200: '#3538CD',
        },
        violet: {
          100: '#F9F5FF',
          200: '#7F56D9',
          300: '#6941C6',
        },
        gray: {
          100: '#F8F9FC',
          200: '#363F72',
          300: '#EAECF0',
          400: '#d1d5db',
        },
        orange: {
          100: '#FFF6ED',
          200: '#C4320A',
        },
        teel: {
          100: '#F0F9FF',
          200: '#026AA2',
        },
        background: '#FFFFFF',
        white: '#FFFFFF',
        current: 'currentColor',
        transparent: 'transparent',
        ukraniane: { start: '#eab308', via: '#f59e0b', end: '#2563eb' },
        dark: {
          background: '#090D1F',
          title: '#FFFFFF',
          text: '#C0C5D0',
          border: '#333740',
          'schedule-background': '#0F142E',
          date: '#A17FEB',
        },
      },
      opacity: {
        34: '0.34',
        50: '0.50',
        100: '100',
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
        '4xl': ['36px', '0.9'],
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
        lg: '29px',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
};

export default config;
