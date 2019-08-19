import { mergeTypes } from 'merge-graphql-schemas'
import Movie from './Movie/movie.schema'
import Actor from './Actor/actor.schema'
import Director from './Director/director.schema'
import User from './User/user.schema'

export default mergeTypes([Movie, Actor, Director, User], { all: true })
