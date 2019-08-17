import Director from '@models/director.model'

export const directors = async (_, { limit = 50, name = '' }) => Director
  .find(name ? { name } : {})
  .sort({ name: 1 })
  .limit(limit)
