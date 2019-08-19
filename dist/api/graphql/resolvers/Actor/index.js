"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Queries = _interopRequireWildcard(require("./queries"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _default = {
  Query: Queries,
  ..._resolvers.default
};
exports.default = _default;