module.exports = {
  root: true,
  env: {
    es2017: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],

  rules: {
    'eol-last': ['error', 'always'],
    '@typescript-eslint/no-var-requires': 0,
  },
};
