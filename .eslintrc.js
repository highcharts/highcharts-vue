module.exports = {
    env: {
        browser: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential'
    ],
    ignorePatterns: ['**/*.d.ts'],
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
