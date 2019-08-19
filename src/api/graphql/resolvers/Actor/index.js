import * as Queries from './queries'
import resolvers from './resolvers'

export default {
  Query: Queries,
  ...resolvers,
}
