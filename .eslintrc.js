module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },

  parser: 'babel-eslint',
  globals: {
    $: true,
    ENV: true,
    I18n: true,
    google: true,
  },
  plugins: ['react', 'prettier'],
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [
      {
        name: 'Link',
        linkAttribute: 'to',
      },
    ],
  },
  rules: {
    'no-debugger': 1,
    'no-underscore-dangle': 0,
    'max-len': [
      'error',
      {
        code: 125,
        tabWidth: 2,
        ignoreComments: true,
      },
    ],
    'no-unused-vars': 'off',
    'prettier/prettier': ['error'],
    'import/order': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 0,
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
}
