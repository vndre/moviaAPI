"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _Movie = _interopRequireDefault(require("./Movie"));

var _Actor = _interopRequireDefault(require("./Actor"));

var _Director = _interopRequireDefault(require("./Director"));

var _User = _interopRequireDefault(require("./User"));

var _default = (0, _mergeGraphqlSchemas.mergeResolvers)([_Movie.default, _Actor.default, _Director.default, _User.default]);

exports.default = _default;