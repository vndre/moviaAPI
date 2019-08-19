"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actor = _interopRequireDefault(require("/home/ansky/Workspace/moviaAPI/src/api/models/actor.model"));

var _default = {
  Movie: {
    async actors(movie) {
      return _actor.default.find({
        _id: {
          $in: movie.actors
        }
      });
    },

    scoutbase_rating(_, __, {
      isLogged
    }) {
      if (!isLogged) {
        return 'You don\'t have permission to see this field, please log in first.';
      }

      const randomNum = () => ~~(Math.random() * 5) + 5;

      return `${randomNum()}.${randomNum()}`;
    }

  }
};
exports.default = _default;