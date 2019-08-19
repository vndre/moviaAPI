"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movies = void 0;

var _movie = _interopRequireDefault(require("/home/ansky/Workspace/moviaAPI/src/api/models/movie.model"));

const movies = async (_, {
  limit = 50,
  title = ''
}) => {
  const dbMovies = await _movie.default.find(title ? {
    title
  } : {}).sort({
    title: 1
  }).limit(limit);
  return dbMovies;
};

exports.movies = movies;