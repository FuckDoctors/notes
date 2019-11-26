// https://eslint.vuejs.org/user-guide/#installation
// https://github.com/prettier/eslint-config-prettier/blob/master/README.md
module.exports = {
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json'
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue'
  ],
  plugins: [
    // 配合上面的extends
    '@typescript-eslint',
    'prettier',
    'vue'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    '@typescript-eslint/no-var-requires': 'warn'
  }
};
