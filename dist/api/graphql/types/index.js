"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _movie = _interopRequireDefault(require("./Movie/movie.schema"));

var _actor = _interopRequireDefault(require("./Actor/actor.schema"));

var _director = _interopRequireDefault(require("./Director/director.schema"));

var _user = _interopRequireDefault(require("./User/user.schema"));

var _default = (0, _mergeGraphqlSchemas.mergeTypes)([_movie.default, _actor.default, _director.default, _user.default], {
  all: true
});

exports.default = _default;