module.exports = {
  presets: [require('@babel/preset-env')],
  plugins: [
    require('@babel/plugin-syntax-dynamic-import'),
    // 按需加载
    // https://www.antdv.com/docs/vue/introduce-cn/#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD
    // https://segmentfault.com/q/1010000016426061
    // 但是VuePress中不使用babelrc和babel.config.js：
    // https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/core/lib/node/webpack/createBaseConfig.js
    // https://github.com/vuejs/vuepress/pull/644
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }
    ]
  ],
  ignore: ['docs/.vuepress/dist']
};
