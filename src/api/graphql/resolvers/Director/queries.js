import Director from '@models/director.model'

export const directors = async (_, { limit = 50, name = '' }) => {
  const dbDirectors = await Director
    .find(name ? { name } : {})
    .sort({ name: 1 })
    .limit(limit)

  return dbDirectors
}
