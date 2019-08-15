const path = require('path')

module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "airbnb-base",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "no-console": 0,
    "semi": ["error", "never"],
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0
  },
  "settings": {
    "import/resolver": {
      "babel-module": {
        "root": [path.resolve("./src")],
        "alias": {
          "@models": path.resolve(__dirname, "./src/api/models"),
        }
      }
    }
  },
  "plugins": [
    "import"
  ]
}
