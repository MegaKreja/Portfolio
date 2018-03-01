module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "off"
        ],
        "linebreak-style": [
            "off"
        ],
        "quotes": [
            "off"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "off"
        ],
        "no-undef": [
            "off"
        ],
        "no-console": [
            "off"
        ],
        "constructor-super": [
            "off"
        ],
        "no-mixed-spaces-and-tabs": [
            "off"
        ]
    }
};