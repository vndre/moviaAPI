"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = `
  type User {
    id: String!,
    username: String!
  }

  type UserMutationPayload {
    token: String!,
    user: User!
  }

  type Mutation {
    createUser(username: String!, password: String!): UserMutationPayload
    login(username: String!, password: String!): UserMutationPayload
  }
`;
exports.default = _default;