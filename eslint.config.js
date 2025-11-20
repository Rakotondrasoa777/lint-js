import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default defineConfig([
	{
		files: ["**/*.js"],
        languageOptions: {
            parser: tsparser,
        },
		plugins: {
			js,
            "@typescript-eslint": tseslint,
		},
		extends: ["js/recommended"],
		rules: {
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    "selector": "class",
                    "format": ["PascalCase"]
                },
                {
                    "selector": "variable",
                    "format": ["camelCase"]
                },
                {
                    "selector": "method",
                    "format": ["camelCase"]
                }
            ]
		},
	},
]);
