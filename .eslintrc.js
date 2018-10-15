module.exports = {
  root: true,
  parser: 'babel-eslint',
  'extends': ['airbnb', 'plugin:jest/recommended'],
  'plugins': [
    'jest',
    'react',
    'redux-saga',
    'jsx-a11y',
    'import',
    'styled-components-config',
  ],
  settings: {
    'import/resolver': 'eslint-import-resolver-webpack',
  },
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    'jsx-a11y/anchor-is-valid': [ 'error', {
      'components': [ 'Link' ],
      'specialLink': [ 'to' ]
    }],
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/no-danger': 'off',
    'import/no-extraneous-dependencies': 'off',
    'arrow-parens': 'off',
    'global-require': 'off',
    'spaced-comment': 'off',
    'consistent-return': 'warn', // for react arrow funcs
    indent: ['error', 2],
    'linebreak-style': 'off',
    'react/jsx-filename-extension': [
      1, { 'extensions': ['.js', '.jsx'] }
    ],
    'react/prefer-stateless-function': [
      2, { "ignorePureComponents": true }
    ],
    'react/forbid-prop-types': [0, { 'forbid': [] }],
    'react/jsx-one-expression-per-line': 0,
    'import/extensions': [1, 'never', { 'svg': 'always' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': true,
        'optionalDependencies': false,
        'peerDependencies': false
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': 0,
    'no-console': 0,
    'no-undef': 0,
    'no-plusplus': 'off',
    'import/extensions': ['off', 'never'],
    'import/no-unresolved': 'off',
    'import/no-duplicates': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'max-len': [2, { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
  },
};