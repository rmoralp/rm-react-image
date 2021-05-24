const prettierOptions = require('./.prettierrc')

const RULES = {
  OFF: 0,
  WARNING: 1,
  ERROR: 2
}

const REACT_RULES = {
  'react-hooks/exhaustive-deps': RULES.WARNING, // Checks effect dependencies
  'react-hooks/rules-of-hooks': RULES.ERROR, // Checks rules of Hooks
  'react/default-props-match-prop-types': RULES.WARNING,
  'react/jsx-handler-names': RULES.WARNING,
  'react/jsx-no-duplicate-props': [RULES.WARNING, {ignoreCase: true}],
  'react/jsx-no-undef': RULES.WARNING,
  'react/jsx-pascal-case': [
    RULES.WARNING,
    {
      allowAllCaps: true,
      ignore: []
    }
  ],
  'react/jsx-uses-react': RULES.OFF,
  'react/jsx-uses-vars': RULES.WARNING,
  'react/no-deprecated': RULES.WARNING,
  'react/no-direct-mutation-state': RULES.ERROR,
  'react/no-is-mounted': RULES.WARNING,
  'react/no-multi-comp': [RULES.WARNING, {ignoreStateless: true}],
  'react/no-unused-prop-types': RULES.WARNING,
  'react/react-in-jsx-scope': RULES.OFF,
  'react/require-render-return': RULES.WARNING
}

module.exports = {
  env: {
    es6: true,
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    jest: true // Enables for jest tests
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module' // Allows using import/export statements
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'standard',
    'standard-react',
    'eslint:recommended',
    'prettier',
    'prettier/standard',
    'prettier/react'
  ],
  plugins: ['no-only-tests', 'prettier', 'react-hooks'],
  rules: {
    ...REACT_RULES,
    'accessor-pairs': RULES.OFF,
    '@babel/no-unused-expressions': RULES.OFF,
    'no-console': RULES.WARNING,
    'no-debugger': RULES.ERROR,
    'no-nested-ternary': RULES.WARNING,
    'no-prototype-builtins': RULES.OFF,
    'no-return-await': RULES.WARNING,
    'no-unused-expressions': RULES.OFF,
    'no-unused-vars': [
      RULES.WARNING,
      {
        vars: 'local',
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'no-var': RULES.WARNING,
    strict: RULES.OFF,
    'prettier/prettier': [RULES.ERROR, prettierOptions]
  }
}
