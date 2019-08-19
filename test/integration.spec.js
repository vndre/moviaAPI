import { verify as JWTVerify } from 'jsonwebtoken'
import { createTestClient } from 'apollo-server-testing'
import { ApolloServer, gql } from 'apollo-server-koa'
import mongoose from 'mongoose'
import { expect } from 'chai'
import { typeDefs, resolvers } from '../src/api/graphql/schema'
import { populateDB } from '../src/utils/populateDB'
import 'dotenv/config'

const {
  MONGO_URL, DEV_MONGO_URL, NODE_ENV, JWT_SECRET,
} = process.env
const dbUrl = NODE_ENV === 'production' ? MONGO_URL : DEV_MONGO_URL

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ isLogged: true }),
})

describe('Queries', () => {
  before(async () => {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      keepAlive: 30000,
      connectTimeoutMS: 30000,
    })
    await populateDB()
  })

  after(async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
  })

  it('queries for a movie', async () => {
    const GET_MOVIE = gql`
      query movies($title: String) {
        movies(title: $title) {
          title
        }
      }
    `
    const { query } = createTestClient(server)
    const title = 'Return of the Jedi'
    const res = await query({
      query: GET_MOVIE,
      variables: { title },
    })
    expect(res.data.movies[0].title).to.equal(title)
  })

  it('queries for an actor', async () => {
    const GET_ACTOR = gql`
      query actors($name: String) {
        actors(name: $name) {
          name
        }
      }
    `
    const name = 'Anita Ekberg'
    const { query } = createTestClient(server)
    const res = await query({
      query: GET_ACTOR,
      variables: { name },
    })
    expect(res.data.actors[0].name).to.equal(name)
  })

  it('queries for a director', async () => {
    console.log('QUERY direcotr')
    const GET_DIRECTOR = gql`
      query directors($name: String) {
        directors(name: $name) {
          name
        }
      }
    `
    const name = 'Richard Marquand'
    const { query } = createTestClient(server)
    const res = await query({
      query: GET_DIRECTOR,
      variables: { name },
    })
    expect(res.data.directors[0].name).to.equal(name)
  })
})

describe('Mutations', () => {
  before(async () => {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      keepAlive: 30000,
      connectTimeoutMS: 30000,
    })
    await populateDB()
  })

  after(async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
  })

  it('creates a new user and returns a valid JWT', async () => {
    const CREATE_USER = gql`
      mutation createUser($username: String!, $password: String!) {
        createUser(username: $username, password: $password) {
          token
          user {
            username
          }
        }
      }
    `
    const testUser = {
      username: 'jester',
      password: 'HeEeY',
    }
    const { mutate } = createTestClient(server)
    const res = await mutate({
      mutation: CREATE_USER,
      variables: testUser,
    })
    const decodedToken = JWTVerify(
      res.data.createUser.token,
      JWT_SECRET,
    )
    expect(decodedToken.username).to.equal(testUser.username)
  })
})
