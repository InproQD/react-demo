module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:react-hooks/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json', // 指定 tsconfig.json 文件的路径
        "ecmaFeatures": {
            jsx: true,
        },
        "parser": '@typescript-eslint/parser',
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks"
    ],
    "rules": {
       "@typescript-eslint/no-explicit-any": 'off',
       "react-hooks/rules-of-hooks": "error",
       "react-hooks/exhaustive-deps": "warn"
    }
}
