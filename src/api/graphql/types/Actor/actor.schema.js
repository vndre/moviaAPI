export default `
  type Actor {
    name: String!,
    birthday: String!,
    country: String!
  }

  extend type Query {
    getActors(limit: Int, name: String): [Actor]!
  }
`
