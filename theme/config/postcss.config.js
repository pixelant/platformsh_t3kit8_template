module.exports = (ctx) => ({
  from: 'dist/development/css/main.css',
  to: 'dist/development/css/main.css',
  plugins: {
    autoprefixer: {},
    cssnano: ctx.env === 'production' ? { preset: 'default' } : false
  }
})
