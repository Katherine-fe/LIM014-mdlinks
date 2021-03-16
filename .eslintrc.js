module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    "semi": error,
    "jest/no-disabled-tests": warn,
    "jest/no-focused-tests": error,
    "jest/no-identical-title": error,
    "jest/prefer-to-have-length": warn,
    "jest/valid-expect": error,
  },
};
