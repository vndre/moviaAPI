const path = require('path')

module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true
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
    "semi": [2, "never"],
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    "no-underscore-dangle": 0,
    "no-bitwise": [2, { "allow": ["~"] }],
    "global-require": 0
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
