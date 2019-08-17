import { mergeResolvers } from 'merge-graphql-schemas'
import Movie from './Movie'
import Actor from './Actor'
import Director from './Director'
import User from './User'

export default mergeResolvers([Movie, Actor, Director, User])
