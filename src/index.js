import Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'
import { success } from 'signale'
import './api/database'
import schema from './api/graphql/schema'

const server = new ApolloServer(schema)
const app = new Koa()

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => {
  success(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})
