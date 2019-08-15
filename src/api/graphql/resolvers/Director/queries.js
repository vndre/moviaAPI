import Director from '@models/director.model'

export const getDirectors = async (_, { limit = 50, name = '' }) => {
  const retrievedActors = await Director
    .find(name ? { name } : {})
    .sort({ name: 1 })
    .limit(limit)

  return retrievedActors
}
