"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = `
  type Actor {
    name: String!,
    birthday: String!,
    country: String!,
    directors: [Director!]!
  }

  extend type Query {
    actors(limit: Int, name: String): [Actor!]!
  }
`;
exports.default = _default;