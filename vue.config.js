module.exports = {
  "transpileDependencies": [
    "resetcss",
    'mdi',
  ],
    publicPath: process.env.NODE_ENV === 'production'
      ? '/my-vue-calendar/'
      : '/'
  }