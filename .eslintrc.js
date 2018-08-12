// .eslintrc.js is prioritised over other eslintrc formats

module.exports = {
    'env': {
        'browser': true,
        'jest': true,
        'es6': true,
        'node': true,
    },
    'extends': [
        'airbnb',
        'prettier',
    ],
    'plugins': [
        'prettier',
    ],
    'rules': {
        'prettier/prettier': ['error', {
            'singleQuote': true,
            'trailingComma': 'es5'
        }],
        "jsx-a11y/href-no-hash": "off",
        "react/jsx-one-expression-per-line": "off"
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        }
    }
};
