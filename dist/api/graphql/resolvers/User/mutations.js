"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.createUser = void 0;

var _bcrypt = require("bcrypt");

var _jsonwebtoken = require("jsonwebtoken");

var _nanoid = _interopRequireDefault(require("nanoid"));

var _user = _interopRequireDefault(require("/home/ansky/Workspace/moviaAPI/src/api/models/user.model"));

const userType = ({
  _id,
  username
}) => ({
  token: (0, _jsonwebtoken.sign)({
    _id,
    username
  }, process.env.JWT_SECRET, {
    expiresIn: '6h'
  }),
  user: {
    id: _id,
    username
  }
});

const createUser = async (_, {
  username,
  password
}) => {
  const userID = (0, _nanoid.default)(6);
  const user = await _user.default.create({
    _id: userID,
    username,
    password: await (0, _bcrypt.hash)(password, 10)
  });
  return userType(user);
};

exports.createUser = createUser;

const login = async (_, {
  username,
  password
}) => {
  const user = await _user.default.findOne({
    username
  });
  if (!user) throw new Error('user does not exist');
  const validPassword = await (0, _bcrypt.compare)(password, user.password);
  if (!validPassword) throw new Error('Incorrect password');
  return userType(user);
};

exports.login = login;