const prettierOptions = require('./.prettierrc')

const RULES = {
  OFF: 0,
  WARNING: 1,
  ERROR: 2
}

module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ['prettier'],
  "rules": {
    'accessor-pairs': RULES.OFF,
    '@babel/no-unused-expressions': RULES.OFF,
    'no-console': RULES.WARNING,
    'no-debugger': RULES.ERROR,
    'no-nested-ternary': RULES.WARNING,
    'no-prototype-builtins': RULES.OFF,
    'no-return-await': RULES.WARNING,
    'no-unused-expressions': RULES.OFF,
    'no-unused-vars': [
      RULES.ERROR,
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'no-var': RULES.WARNING,
    strict: RULES.OFF,
    "prettier/prettier": [RULES.ERROR, prettierOptions]
  }
}