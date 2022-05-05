module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    semi: 0,
    indent: 0,
    'comma-dangle': 0,
    '@typescript-eslint/comma-dangle': 0,
    'extra-semi': 0,
    'react/jsx-filename-extension': 0,
    'react-in-jsx-scope': 0,
    'react/display-name': 0,
    'generator-star-spacing': 0,
    'space-before-function-paren': 0,
    'multiline-ternary': 0,
    'no-undef': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
