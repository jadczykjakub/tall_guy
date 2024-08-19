import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '120rem',
      },
      colors: {
        primary: '#1d9a9f',
        secondary: '#363636',
        codeHightlightBg: '#2b2b2b',
        codeHightlightBgLight: '#6b6666'

      },
      screens: {
        touchScr: { raw: '(hover: none)' },
        hoverScr: { raw: '(hover: hover)' },
      },
      fontSize: {
        '2xl': '3.75rem',
        xl: '1.75rem',
        l: '1.2rem',
        m: '1rem',
        s: '0.8rem',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
