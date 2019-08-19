"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _nanoid = _interopRequireDefault(require("nanoid"));

const DirectorSchema = new _mongoose.Schema({
  _id: {
    type: String,
    default: () => (0, _nanoid.default)(10)
  },
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
});

var _default = (0, _mongoose.model)('Director', DirectorSchema);

exports.default = _default;