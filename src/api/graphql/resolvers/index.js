import { mergeResolvers } from 'merge-graphql-schemas'
import Movie from './Movie'
import Actor from './Actor'
import Director from './Director'

export default mergeResolvers([Movie, Actor, Director])
