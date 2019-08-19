import Movie from '@models/movie.model'

export const movies = async (_, { limit = 50, title = '' }) => {
  const dbMovies = await Movie
    .find(title ? { title } : {})
    .sort({ title: 1 })
    .limit(limit)

  return dbMovies
}
