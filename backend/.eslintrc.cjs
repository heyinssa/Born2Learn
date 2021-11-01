module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended', //
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['src/controllers/*/*.js'],
      rules: {
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
      },
    },
    {
      files: ['src/middleware/*/*.js'],
      rules: {
        'no-unused-vars': ['error', { argsIgnorePattern: 'req|res|next' }],
      },
    },
  ],
};
