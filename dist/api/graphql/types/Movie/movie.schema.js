"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = `
  type Movie {
    title: String!,
    scoutbase_rating: String!,
    year: String!,
    rating: Float!,
    actors: [Actor!]!
  }

  type Query {
    movies(limit: Int, title: String): [Movie!]!
  }
`;
exports.default = _default;