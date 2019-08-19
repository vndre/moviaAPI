"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = `
  type Director {
    name: String!,
    birthday: String!,
    country: String!
  }

  extend type Query {
    directors(limit: Int, name: String): [Director!]!
  }
`;
exports.default = _default;