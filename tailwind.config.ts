import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
        },
        orange: {
          100: '#FFF6ED',
          200: '#C4320A',
        },
        teel: {
          100: '#F0F9FF',
          200: '#026AA2',
        },
        white: '#FFFFFF',
        current: 'currentColor',
        transparent: 'transparent',
      },
      opacity: {
        34: '0.34',
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
        lg: '29px',
      },
    },
  },
  plugins: [],
};

export default config;
