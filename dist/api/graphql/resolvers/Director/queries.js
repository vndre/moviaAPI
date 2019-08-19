"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.directors = void 0;

var _director = _interopRequireDefault(require("/home/ansky/Workspace/moviaAPI/src/api/models/director.model"));

const directors = async (_, {
  limit = 50,
  name = ''
}) => _director.default.find(name ? {
  name
} : {}).sort({
  name: 1
}).limit(limit);

exports.directors = directors;