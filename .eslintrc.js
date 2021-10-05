module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  rules: {
    'class-methods-use-this': ['error', { 'exceptMethods': ['next', 'error', 'complete'] }]
  },
  env: {
    es6: true,
    node: true,
  },
};
