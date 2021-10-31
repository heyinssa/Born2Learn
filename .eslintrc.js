module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  ignorePatterns: ['node_modules/', 'reportWebVitals.js'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/prop-types': ['off'],
  },
};
