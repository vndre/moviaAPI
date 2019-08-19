"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _signale = require("signale");

require("dotenv/config");

const {
  MONGO_URL,
  DEV_MONGO_URL,
  NODE_ENV
} = process.env;
const dbUrl = NODE_ENV === 'production' ? MONGO_URL : DEV_MONGO_URL;
_mongoose.default.Promise = Promise;

_mongoose.default.connection.on('connected', () => {
  (0, _signale.success)(`Connected to mongoDB at ${MONGO_URL}`);
});

_mongoose.default.connection.on('reconnected', () => {
  (0, _signale.success)('Reconnected to MongoDB');
});

_mongoose.default.connection.on('disconnected', () => {
  (0, _signale.fatal)('Disconnected from MongoDB');
});

_mongoose.default.connection.on('close', () => {
  (0, _signale.debug)('Closed connection to MongoDB');
});

_mongoose.default.connection.on('error', error => {
  (0, _signale.fatal)(`Error on MongoDB connection: ${error}`);
});

_mongoose.default.connect(dbUrl, {
  useNewUrlParser: true,
  keepAlive: 30000,
  connectTimeoutMS: 30000
});