// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    //临时允许未使用变量
    'no-unused-vars': 'off',
    //注释前，可以有多个空格以便注释对其
    'no-multi-spaces': [2,{"ignoreEOLComments": true}],
    'no-trailing-spaces': 'off',
    //允许特殊控制字符出现正则中
    'no-control-regex': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow space-less before functions
    'space-before-function-paren': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
