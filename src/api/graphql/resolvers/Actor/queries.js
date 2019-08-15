import Actor from '@models/actor.model'

export const getActors = async (_, { limit = 50, name = '' }) => {
  const retrievedActors = await Actor
    .find(name ? { name } : {})
    .sort({ name: 1 })
    .limit(limit)

  return retrievedActors
}
