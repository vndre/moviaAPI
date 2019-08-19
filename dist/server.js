"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = void 0;

var _koa = _interopRequireDefault(require("koa"));

var _koaJwt = _interopRequireDefault(require("koa-jwt"));

var _apolloServerKoa = require("apollo-server-koa");

var _signale = require("signale");

var _jsonwebtoken = require("jsonwebtoken");

var _schema = require("./api/graphql/schema");

require("./api/database");

const {
  JWT_SECRET,
  NODE_ENV
} = process.env;
const port = 4000;
const playgroundSettings = {
  settings: {
    'editor.theme': 'dark'
  },
  tabs: [{
    endpoint: NODE_ENV === 'production' ? 'http://moviadb.cerberus.ansky.sh' : `http://localhost:${port}/graphql`,
    name: 'movies',
    query: '{\n  movies {\n    title \n    actors {\n      name\n    }\n  }\n}'
  }]
};
const server = new _apolloServerKoa.ApolloServer({
  typeDefs: _schema.typeDefs,
  resolvers: _schema.resolvers,
  introspection: true,
  playground: playgroundSettings,
  context: async ({
    ctx
  }) => {
    let isLogged = false;

    if (typeof ctx.request.headers.authorization !== 'undefined') {
      await (0, _jsonwebtoken.verify)(ctx.request.headers.authorization, JWT_SECRET, (err, decoded) => {
        if (err) (0, _signale.fatal)(err);
        if (decoded) isLogged = true;
      });
    }

    return {
      isLogged
    };
  }
});
exports.server = server;
const app = new _koa.default();
app.use((0, _koaJwt.default)({
  secret: JWT_SECRET
}).unless({
  path: server.graphqlPath
}));
server.applyMiddleware({
  app
});
app.listen({
  port: 4000
}, () => {
  (0, _signale.success)(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
});