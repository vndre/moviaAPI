export default `
  type Movie {
    title: String!,
    year: String!,
    rating: Float!,
    actors: [Actor!]!
  }

  type Query {
    movies(limit: Int, title: String): [Movie!]!
  }
`
