"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _nanoid = _interopRequireDefault(require("nanoid"));

const ActorSchema = new _mongoose.Schema({
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
  },
  directors: [{
    type: String,
    ref: 'Director'
  }]
});

var _default = (0, _mongoose.model)('Actor', ActorSchema);

exports.default = _default;