"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Movie", {
  enumerable: true,
  get: function () {
    return _movie.default;
  }
});
Object.defineProperty(exports, "Actor", {
  enumerable: true,
  get: function () {
    return _actor.default;
  }
});
Object.defineProperty(exports, "Director", {
  enumerable: true,
  get: function () {
    return _director.default;
  }
});
Object.defineProperty(exports, "User", {
  enumerable: true,
  get: function () {
    return _user.default;
  }
});

var _movie = _interopRequireDefault(require("./movie.model"));

var _actor = _interopRequireDefault(require("./actor.model"));

var _director = _interopRequireDefault(require("./director.model"));

var _user = _interopRequireDefault(require("./user.model"));