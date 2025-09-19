import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import js from '@eslint/js';
import globals from 'globals';

// Импортируем парсер и плагин правильно
import babelParser from '@babel/eslint-parser';
import reactPlugin from 'eslint-plugin-react';

export default [
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
            parser: babelParser, // Передаем импортированный объект парсера
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-react']
                }
            }
        },
        plugins: {
            react: reactPlugin // Передаем импортированный объект плагина
        },
        rules: {
            ...js.configs.recommended.rules,
            'indent': ['error', 2],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error'
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    },
];