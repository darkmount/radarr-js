module.exports = {
    parser: 'babel-eslint',
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:flowtype/recommended',
        'prettier',
        'prettier/flowtype'
    ],
    plugins: ['prettier', 'flowtype'],
    env: {
        jest: true,
        browser: true,
        node: true
    },
    rules: {
        "prettier/prettier": "error",
    }
};
