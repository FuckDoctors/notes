module.exports = {
  presets: [require('@babel/preset-env')],
  plugins: [
    require('@babel/plugin-syntax-dynamic-import'),
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'lib', style: 'css' },
      'ant'
    ],
    [
      'import',
      { libraryName: 'antd-mobile', libraryDirectory: 'lib', style: 'css' },
      'antd-mobile'
    ]
  ],
  ignore: ['docs/.vuepress/dist']
};
