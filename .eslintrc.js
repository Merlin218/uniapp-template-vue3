module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  // 配置js全局变量，因为是uni-app，全局的uni是不需要引入的，还有5+的plus对象
  globals: {
    uni: 'readonly',
    plus: 'readonly',
    wx: 'readonly',
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'warn',
    'no-alert': process.env.NODE_ENV === 'development' ? 'off' : 'warn',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: auto,
      },
    ],
  },
};
