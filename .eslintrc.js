const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"));

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-typescript", "airbnb/hooks", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error", prettierOptions],
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [
      "off",
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
        bundledDependencies: false,
        packageDir: "./",
      },
    ],
    "@typescript-eslint/no-shadow": "warn",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "none"
  },
};
