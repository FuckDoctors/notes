module.exports = {
  plugins: [
    /* You should remove 'autoprefixer' from your postcss plugin list since it's already included by postcss-cssnext. */
    // require('autoprefixer'),
    // require('postcss-easy-import')({
    //   extensions: ['.css', '.scss', '.styl']
    // }),
    require('postcss-import')({
      plugins: [
        require('stylelint')({
          /* options */
        })
      ]
    }),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-cssnext')({
      browsers: 'last 2 versions'
    }),
    require('postcss-custom-media'),
    require('postcss-custom-selectors'),
    require('postcss-reporter')({
      clearReportedMessages: true
    })
  ]
};
