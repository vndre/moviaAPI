import Movie from '@models/movie.model'

export const getMovies = async (_, { limit = 50, title = '' }) => {
  const retrievedMovies = await Movie
    .find(title ? { title } : {})
    .sort({ title: 1 })
    .limit(limit)

  return retrievedMovies
}
