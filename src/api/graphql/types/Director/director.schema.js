export default `
  type Director {
    name: String!,
    birthday: String!,
    country: String!
  }

  extend type Query {
    getDirectors(limit: Int, name: String): [Director]!
  }
`
