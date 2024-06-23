import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest,
      },
    },
    rules: {
      'no-console': 'off',  // Ändere diese Zeile, um console-Statements zu erlauben
      'quotes': ['error', 'double'],
      'semi': ['error', 'always'],
      'no-unused-vars': 'warn',
    },
  },
];
