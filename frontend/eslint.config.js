import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Теперь можно использовать require для импорта CommonJS-модулей
const js = require('@eslint/js');
const globals = require('globals');

export default [
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
            parser: '@babel/eslint-parser',
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-react']
                }
            }
        },
        plugins: {
            react: require('eslint-plugin-react')
        },
        rules: {
            ...js.configs.recommended.rules,
            'indent': ['error', 4],
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