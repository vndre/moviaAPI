import mongoose from 'mongoose'
import { success, debug, fatal } from 'signale'
import 'dotenv/config'

const { MONGO_URL, DEV_MONGO_URL, NODE_ENV } = process.env

const dbUrl = NODE_ENV === 'production' ? MONGO_URL : DEV_MONGO_URL

mongoose.Promise = Promise

mongoose.connection.on('connected', () => {
  success(`Connected to mongoDB at ${MONGO_URL}`)
})

mongoose.connection.on('reconnected', () => {
  success('Reconnected to MongoDB')
})

mongoose.connection.on('disconnected', () => {
  fatal('Disconnected from MongoDB')
})

mongoose.connection.on('close', () => {
  debug('Closed connection to MongoDB')
})

mongoose.connection.on('error', (error) => {
  fatal(`Error on MongoDB connection: ${error}`)
})

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  keepAlive: 30000,
  connectTimeoutMS: 30000,
})
