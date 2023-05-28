// @ts-check

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)'],
        display: ['var(--font-playfair)'],
        roboto: ['var(--font-roboto)'],
      },

      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1240px',
          xl: '1440px',
        },
      },
      keyframes: {
        'slide-in-out': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateX(0%)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
        },
      },
      animation: {
        'slide-in-out': 'slide-in-out 5s linear infinite',
      },
    },
  },
  plugins: [],
};