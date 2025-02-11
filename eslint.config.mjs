import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import pluginA11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import pluginHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module",
                project: "./tsconfig.json",
            },
            globals: globals.browser
        }

    },
    pluginJs.configs.recommended,
    {
        plugins: {
            "react": pluginReact,
            "react-hooks": pluginHooks,
            "jsx-a11y": pluginA11y,
            "import": pluginImport,
            "@typescript-eslint": tseslint,
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "jsx-a11y/anchor-is-valid": "warn",
            "import/no-unresolved": "error",
            "import/no-extraneous-dependencies": "error",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "max-len": ["warn", {"code": 85, "tabWidth": 2}]
        }
    }
];
