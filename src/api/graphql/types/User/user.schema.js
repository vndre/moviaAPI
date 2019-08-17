export default `
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
`
