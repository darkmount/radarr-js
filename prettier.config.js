module.exports = {
    singleQuote: true,
    tabWidth: 4,
    semi: true,
    overrides: [
        {
            files: '*.js',
            options: {
                parser: 'flow'
            }
        }
    ]
};
