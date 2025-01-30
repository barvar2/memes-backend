export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  rules: {
    '@typescript-eslint/no-unsafe-call': 'off', // Disables unsafe call detection
    '@typescript-eslint/no-unsafe-member-access': 'off', // Disables unsafe member access detection
    // You can add any other rules you might want to configure here
  },
};
