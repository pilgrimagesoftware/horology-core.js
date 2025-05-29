import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
    parserOptions: { tsconfigRootDir: '.' },
    },
    ignores: [
      'examples/*',
      'dist/*',
      'node_modules/*',
      'coverage/*',
      'build/*',
      'public/*',
    ]
  }
];
