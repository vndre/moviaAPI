import Koa from 'koa'
import jwt from 'koa-jwt'
import { ApolloServer, gql } from 'apollo-server-koa'
import { success, fatal } from 'signale'
import { verify as JWTVerify } from 'jsonwebtoken'
import { typeDefs, resolvers } from './api/graphql/schema'
import './api/database'

const { JWT_SECRET, NODE_ENV } = process.env
const port = 4000

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: {
    settings: {
      'editor.theme': 'dark',
    },
    tabs: [
      {
        endpoint: NODE_ENV === 'production'
          ? 'f'
          : `http://localhost:${port}/graphql`,
        name: 'movies',
        query: '{\n  movies {\n    title \n    actors {\n      name\n    }\n  }\n}',
      },
    ],
  },
  context: async ({ ctx }) => {
    let isLogged = false
    if (typeof ctx.request.headers.authorization !== 'undefined') {
      console.log('uh oh')
      await JWTVerify(
        ctx.request.headers.authorization,
        JWT_SECRET,
        (err, decoded) => {
          if (err) fatal(err)
          if (decoded) isLogged = true
        },
      )
    }
    return { isLogged }
  },
})

const app = new Koa()

app.use(jwt({ secret: JWT_SECRET }).unless({ path: server.graphqlPath }))

server.applyMiddleware({ app })

console.log(gql`
  {
    movies {
      title
    }
  }
`)

app.listen({ port: 4000 }, () => {
  success(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
})
