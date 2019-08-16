export default `
  type Actor {
    name: String!,
    birthday: String!,
    country: String!,
    directors: [Director!]!
  }

  extend type Query {
    actors(limit: Int, name: String): [Actor!]!
  }
`
