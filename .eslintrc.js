module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential'
    ],
    overrides: [{
        env: {
            node: true
        },
        files: [
            '.eslintrc.{js,cjs}'
        ],
        parserOptions: {
            sourceType: 'script'
        }
    }],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        'quote-props': ['error', 'as-needed']
    }
};
