import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    plugins: {
      prettier,
      "sort-destructure-keys": sortDestructureKeys,
    },

    rules: {
      "prettier/prettier": "error",
      "no-param-reassign": "off",
      "@typescript-eslint/no-unused-vars": "warn",

      "sort-destructure-keys/sort-destructure-keys": [
        2,
        {
          caseSensitive: false,
        },
      ],

      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          ignoreCase: true,
          reservedFirst: true,
          noSortAlphabetically: false,
        },
      ],
    },
  },
];

export default config;
