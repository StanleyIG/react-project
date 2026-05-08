import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactPlugin from 'eslint-plugin-react';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
	{
		ignores: ['dist']
	},
	{
		files: ['**/*.{js,jsx}'],
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'unused-imports': unusedImports // ← Добавьте плагин
		},
		rules: {
			// Базовые правила JS
			...js.configs.recommended.rules,

			// Отключаем стандартное правило no-unused-vars
			'no-unused-vars': 'off',
			
			// Правила для неиспользуемых импортов
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_'
				}
			],

			// Правила React
			...reactPlugin.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',

			// Правила React Hooks
			...reactHooks.configs.recommended.rules,

			// Правила React Refresh
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true }
			],

			// Ваши правила
			semi: ['error', 'always'],
			'comma-dangle': ['error', 'never'],
			quotes: ['error', 'single']
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2020
			},
			parserOptions: {
				ecmaFeatures: { jsx: true },
				sourceType: 'module'
			}
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	}
];