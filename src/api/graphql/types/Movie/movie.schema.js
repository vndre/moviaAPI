export default `
  type Movie {
    title: String!,
    year: String!,
    rating: Int!
  }

  type Query {
    getMovies(limit: Int, title: String): [Movie]!
  }
`
