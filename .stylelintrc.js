module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-use-nesting'],
  rules: {
    'csstools/use-nesting': 'always'
  }
};
