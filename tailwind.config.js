/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    'formkit.theme.ts',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      violet: {
        100: '#DEDDDF',
        500: '#8E8593',
        900: '#21092F',
      },
      error: '#FF5252',
      gradientBlue: '#6448FE',
      gradientViolet: '#600594',
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
    },
    fontSize: {
      'base': [
        '1.125rem',
        {
          lineHeight: '180%',
          letterSpacing: '0px',
        },
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2.5rem',
          letterSpacing: '0px',
          fontWeight: '600',
        },
      ],
      '3xl': [
        '2rem',
        {
          lineHeight: '120%',
          letterSpacing: '0px',
          fontWeight: '600',
        },
      ],
      '5xl': [
        '3.5rem',
        {
          lineHeight: '120%',
          letterSpacing: '0px',
          fontWeight: '600',
        },
      ],
      '7xl': [
        '5rem',
        {
          lineHeight: '100%',
          letterSpacing: '0px',
          fontWeight: '600',
        },
      ],
    },
  },
  plugins: [],
}
