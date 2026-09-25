import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fff7f6',
          100: '#ffe4e1',
          200: '#ffd1ca',
          300: '#ffb3a3',
          400: '#ff9d8c',
          500: '#ff6b5b',
          600: '#ff5142',
          700: '#ff3d2d',
          800: '#f52e1c',
          900: '#d41c0a',
          950: '#a01505',
        },
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      fontFamily: {
        system: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
