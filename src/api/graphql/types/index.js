import { mergeTypes } from 'merge-graphql-schemas'
import Movie from './Movie/movie.schema'
import Actor from './Actor/actor.schema'
import Director from './Director/director.schema'

export default mergeTypes([Movie, Actor, Director], { all: true })
