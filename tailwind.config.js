/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: require('./typography'),
    extend: {
      colors: {
        gray: {
          50: '#F2F5F9',
          100: '#E8ECF3',
          200: '#D0D7E6',
          300: '#B4C0D3',
          400: '#8596B3',
          500: '#546380',
          700: '#334155',
          800: '#1A2E4D',
          900: '#0F172A',
        },
        primary: {
          50: '#EFF6FC',
          100: '#DCE9F5',
          200: '#BDD4EA',
          300: '#95B8D9',
          600: '#2D5986',
          700: '#1E3E63',
        },
        blue: {
          500: '#E5ECFA',
        },
        green: {
          50: '#F0F9F5',
          100: '#DEF0E8',
          800: '#1F3D3C',
        },
        yellow: {
          100: '#F5F6ED',
          800: '#3D3A2A',
        },
        purple: {
          50: '#F6F5FA',
        },
        indigo: {
          25: '#F5F8FA',
          100: '#E0E8F4',
          600: '#2D5986',
        },
      },
      screens: {
        mobile: '100px',
        // => @media (min-width: 100px) { ... }
        tablet: '640px', // 391
        // => @media (min-width: 600px) { ... }
        pc: '769px',
        // => @media (min-width: 769px) { ... }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
