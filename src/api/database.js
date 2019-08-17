const mongoose = require('mongoose')
const { success, debug, fatal } = require('signale')
require('dotenv/config')

const { MONGO_URL } = process.env

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

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  keepAlive: 30000,
  connectTimeoutMS: 30000,
})
