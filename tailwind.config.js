module.exports = {
  purge: {
    content: ['./src/**/*.{js}'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
