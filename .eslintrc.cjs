module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: ['./apps/client/tsconfig.json', './spec/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': 'error',
    'no-console': 'warn',
    'react/prop-types': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./apps/client/tsconfig.json', './apps/server/tsconfig.json'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.cjs', 'tsconfig*.json'],

  overrides: [
    {
      files: ['apps/server/**/*.{ts,tsx}'],
      parserOptions: {
        project: ['./apps/server/tsconfig.json'],
      },
      rules: {
        'import/no-named-as-default-member': 'off',
        'import/default': 'off',
        'no-console': 'off',
      },
    },
  ],
};
