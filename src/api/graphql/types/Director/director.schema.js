export default `
  type Director {
    name: String!,
    birthday: String!,
    country: String!
  }

  extend type Query {
    directors(limit: Int, name: String): [Director!]!
  }
`
