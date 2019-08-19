"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _director = _interopRequireDefault(require("/home/ansky/Workspace/moviaAPI/src/api/models/director.model"));

var _default = {
  Actor: {
    async directors(actor) {
      return _director.default.find({
        _id: {
          $in: actor.directors
        }
      });
    }

  }
};
exports.default = _default;