module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    _: false,
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "eslint:recommended"],
  rules: {
    "no-console": "off",
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    "vue/html-self-closing": "off", //<input></input>
    "vue/no-parsing-error": [
      2,
      {
        //<input></input>
        "x-invalid-end-tag": false,
      },
    ],
    "no-unexpected-multiline": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false, // '' 사용유무
        semi: true, // ; 사용유무
        useTabs: false,
        tabWidth: 2,
        trailingComma: "all", //코드소스 뒤에 , 자동으로 넣을지
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: "avoid",
        endOfLine: "auto", //async 사용시 에러 않나게
      },
    ],
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
