import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactPlugin from 'eslint-plugin-react';

export default [
  {
    ignores: ['dist']
  },
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      // Базовые правила JS
      ...js.configs.recommended.rules,
      
      // Правила React
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',     // ← ОТКЛЮЧИТЬ для React 17+
      'react/prop-types': 'off',              // ← ОТКЛЮЧИТЬ если не используется prop-types
      // 'react/jsx-no-target-blank': 'error',
      
      // Правила React Hooks
      ...reactHooks.configs.recommended.rules,
      
      // Правила React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      
      // Ваши правила
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'never'],
      'quotes': ['error', 'single']
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: { 
        ecmaFeatures: { jsx: true } 
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];