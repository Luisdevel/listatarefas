module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/state-in-constructor': 0,
    'import/no-duplicates': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent-props': 0,
    'react/forbid-prop-types': 0,
  },
};
