"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actors = void 0;

var _actor = _interopRequireDefault(require("/home/ansky/Workspace/moviaAPI/src/api/models/actor.model"));

const actors = async (_, {
  limit = 50,
  name = ''
}) => _actor.default.find(name ? {
  name
} : {}).sort({
  name: 1
}).limit(limit);

exports.actors = actors;