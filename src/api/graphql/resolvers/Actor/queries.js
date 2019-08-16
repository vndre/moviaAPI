import Actor from '@models/actor.model'

export const actors = async (_, { limit = 50, name = '' }) => {
  const dbActors = await Actor
    .find(name ? { name } : {})
    .sort({ name: 1 })
    .limit(limit)
    .populate('directors')

  return dbActors
}
