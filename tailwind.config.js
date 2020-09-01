const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './**/*.html',
    './**/*.tsx',
    './**/*.jsx',
    './**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')]
}