const path = require('path')

module.exports = {
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    require.resolve("@babel/plugin-transform-runtime"),
    [require.resolve("babel-plugin-module-resolver"), {
      "root": [path.resolve("./src")],
      "alias": {
        "@models": path.resolve(__dirname, "./src/api/models"),
      }
    }]
  ]
}