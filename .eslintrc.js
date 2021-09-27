module.exports = {
  extends: ['eslint:recommended', 'airbnb-base'],
  root: true,
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'max-len': ['warning', { code: 160 }],
  },
};
