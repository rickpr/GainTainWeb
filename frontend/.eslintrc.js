module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  ignorePatterns: ['src/grpc/**'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    project: ['./tsconfig.json'],
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint']
}
