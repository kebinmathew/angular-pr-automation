// @ts-check
const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = defineConfig([

  // =========================
  // TypeScript + Angular
  // =========================
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,

    rules: {
      // Angular selector rules
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],

      // 🔥 IMPORTANT FOR PR COMMENTS
      "no-console": "error",
      "no-var": "error",
      "no-unused-vars": "warn",

      "@typescript-eslint/no-unused-vars": ["warn"],
    },
  },

  // =========================
  // Angular Templates (HTML)
  // =========================
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],

    rules: {
      // 🔥 This will flag function calls in templates
      "@angular-eslint/template/no-call-expression": "warn",

      // Accessibility rule
      "@angular-eslint/template/click-events-have-key-events": "warn",
    },
  },
]);