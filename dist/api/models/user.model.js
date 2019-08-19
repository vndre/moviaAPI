"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _nanoid = _interopRequireDefault(require("nanoid"));

const UserSchema = new _mongoose.Schema({
  _id: {
    type: String,
    default: () => (0, _nanoid.default)(6)
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

var _default = (0, _mongoose.model)('User', UserSchema);

exports.default = _default;