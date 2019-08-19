"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _nanoid = _interopRequireDefault(require("nanoid"));

const MovieSchema = new _mongoose.Schema({
  _id: {
    type: String,
    default: () => (0, _nanoid.default)(10)
  },
  title: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  actors: [{
    type: String,
    ref: 'Actor'
  }]
});

var _default = (0, _mongoose.model)('Movie', MovieSchema);

exports.default = _default;