module.exports = [
   {
     files: ['**/*.js'],

     languageOptions: {
        ecmaVersion: 2022,
        sourceType: 'commonjs',

        globals: {
            require: 'readonly',
            module: 'readonly',
            console: 'readonly',
            describe: 'readonly',
            test: 'readonly',
            expect: 'readonly'
        }
    },

    rules: {
        'no-unused-vars': 'error',
        'no-undef': 'error',
        'no-console': 'off',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single']
    }
}
];
