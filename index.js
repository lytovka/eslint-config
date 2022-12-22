/** @type {import('@types/eslint').Linter.BaseConfig} */
const fs = require("fs")
const path = require("path")

const tsConfigPath = process.env.ESLINT_TSCONFIG_PATH || "tsconfig.json"

const tsConfig = fs.existsSync(tsConfigPath)
  ? path.resolve(tsConfigPath)
  : undefined

module.exports = {
  extends: ["prettier"],
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "accessor-pairs": "error",
    "array-callback-return": "error",
    "arrow-body-style": "off",
    "block-scoped-var": "error",
    camelcase: "off",
    "capitalized-comments": "off", // no, Thanks.
    "class-methods-use-this": "off",
    complexity: ["error", 20],
    "consistent-return": "error",
    "consistent-this": "off",
    "constructor-super": "error",
    curly: ["error", "multi-line"],
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "warn",
    eqeqeq: "off",
    "for-direction": "error",
    "func-name-matching": "error",
    "func-names": "error",
    "func-style": "off",
    "getter-return": "error",
    "grouped-accessor-pairs": "off",
    "guard-for-in": "error",
    "id-denylist": "error",
    "id-length": "off",
    "id-match": "off", // TODO: figure out an optimal regex for identifiers
    "sort-imports": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "max-lines-per-function": "off",
    "max-statements-per-line": ["error", { max: 1 }],
    "logical-assignment-operators": "off", // although more concise, this notation is arguably more difficult to comprehend
    "no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        varsIgnorePattern: "^ignored",
      },
    ],
    "no-unused-private-class-members": "error",
    "no-array-constructor": "error",
    "no-console": "off", // becomes quite problematic in Node environment
    "no-div-regex": "error",
    "no-extra-bind": "error",
    "no-eval": "error",
    "no-extra-semi": "error",
    "no-implied-eval": "error",
    "no-label-var": "error",
    "no-loop-func": "error",
    "no-negated-condition": "off", // legibility of a negated condition should be decided on a per-case basis
    "no-new-native-nonconstructor": "error",
    "no-param-reassign": "off", // let's see if this ever becomes a problem...
    "no-redeclare": "error",
    "no-restricted-exports": "off",
    "no-restricted-syntax": "off", // nothing immediate comes to mind
    "no-self-compare": "error",
    "no-ternary": "off",
    "no-underscore-dangle": "off", // can emphasize that an identifier is special
    "no-unused-expressions": "off", // an expression might be used later
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-var": "error",
    "one-var": ["error", { initialized: "never" }],
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "init-declarations": "off",
    "line-comment-position": "off", // smh
    "lines-between-class-members": "off",
    "max-classes-per-file": "off",
    "max-depth": ["error", 4],
    "max-lines": [
      "error",
      { max: 1000, skipBlankLines: false, skipComments: false },
    ],
    "max-nested-callbacks": ["error", 3],
    "no-extend-native": "error",
    "max-params": ["error", 5],
    "max-statements": "off",
    "multiline-comment-style": "off",
    "new-cap": "error",
    "no-alert": "error",
    "no-await-in-loop": "error",
    "no-constructor-return": "error",
    "no-continue": "off",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "off", // idk
    "no-empty-function": "off",
    "no-empty-static-block": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-constant-binary-expression": "error",
    "no-eq-null": "off",
    "no-extra-label": "error",
    "no-implicit-coercion": "off",
    "no-implicit-globals": "error",
    "no-inline-comments": "off", // who \n // cares?
    "no-lonely-if": "error",
    "no-new": "error",
    "no-plusplus": "off", // can be handy
    "no-restricted-properties": "off", // not sure what properties to disallow at the moment
    "no-shadow": "error",
    "no-unmodified-loop-condition": "error",
    "no-useless-computed-key": "error",
    "object-shorthand": "error",
    "prefer-exponentiation-operator": "off", // revisit later, not buying it now
    "prefer-regex-literals": "off", // will decide once I become a regex wizard
    "require-atomic-updates": ["error", { allowProperties: true }],
    "no-loss-of-precision": "error",
    "no-invalid-this": "error",
    "no-multi-assign": "error",
    "no-new-wrappers": "error",
    "no-restricted-imports": "off", // should be configured in a project that uses this preset
    "no-iterator": "error",
    "no-nested-ternary": "off",
    "no-proto": "error",
    "no-sequences": "error",
    "no-unneeded-ternary": "error",
    "no-useless-return": "error",
    "prefer-arrow-callback": "off",
    "prefer-promise-reject-errors": "error",
    "require-await": "error",
    "vars-on-top": "error",
    "no-labels": "error",
    "no-new-func": "error",
    "no-restricted-globals": "off", // revisit later
    "no-template-curly-in-string": "error",
    "no-lone-blocks": "error",
    "no-promise-executor-return": "error",
    "no-undef-init": "error",
    "no-useless-rename": "error",
    "prefer-destructuring": "off",
    "no-magic-numbers": "off", // we all need some magic once in a while
    "no-return-await": "off",
    "no-use-before-define": "off",
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "prefer-spread": "error",
    strict: "off",
    "no-multi-str": "off",
    "no-script-url": "error",
    "no-useless-call": "error",
    "prefer-named-capture-group": "off", // gotta learn proper regex first
    "prefer-template": "error",
    "symbol-description": "error",
    "no-new-object": "error",
    "no-void": "off",
    radix: "error",
    "no-octal-escape": "error",
    "no-warning-comments": "off", // ["error", { "terms": ["todo", "fixme"], "location": "start" }]
    "require-unicode-regexp": "off",
    "no-return-assign": "error",
    "operator-assignment": "off", // per-case basis
    "spaced-comment": "off", // excessively pedantic rule
    "no-throw-literal": "error",
    "prefer-object-has-own": "error",
    yoda: "error",
    "no-undefined": "off",
    "prefer-object-spread": "error",
    "no-unreachable-loop": "error",
    "prefer-rest-params": "error",
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: [tsConfig],
      },
      plugins: ["@typescript-eslint"],
      rules: {
        // Recommended rules: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "no-implied-eval": "off",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "require-await": "off",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/restrict-template-expressions": "error",
        "@typescript-eslint/unbound-method": "error",

        // Remaining TypeScript Rules
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/array-type": "warn",
        "@typescript-eslint/ban-ts-comment": [
          "error",
          {
            "ts-ignore": "allow-with-description",
          },
        ],
        "@typescript-eslint/ban-tslint-comment": "error",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/class-literal-property-style": "off",
        "@typescript-eslint/consistent-generic-constructors": "off",
        "@typescript-eslint/consistent-indexed-object-style": "off",
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/consistent-type-exports": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/member-ordering": "off", // doesn't make sense to include granular options in the preset
        "@typescript-eslint/method-signature-style": "off",
        "@typescript-eslint/naming-convention": "off", // should be set per each project separately 
        

        // Remaining Extension rules
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "error",
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": "warn",
        "init-declarations": "off",
        "@typescript-eslint/init-declarations": "error",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "off",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "error",
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "error",
        "no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": "warn",
        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": "warn",
        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": "error",
        "no-magic-numbers": "off",
        "@typescript-eslint/no-magic-numbers": "off",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "off",
        "no-restricted-imports": "off",
        "@typescript-eslint/no-restricted-imports": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": "error",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            args: "after-used",
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true,
            varsIgnorePattern: "^ignored",
          },
        ],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "padding-line-between-statements": "off",
        "@typescript-eslint/padding-line-between-statements": [
          "warn",
          { blankLine: "always", prev: "*", next: "return" },
        ],
        "no-return-await": "off",
        "@typescript-eslint/return-await": "error",
      },
    },
  ],
}
