import { hash as bHash, compare as bCompare } from 'bcrypt'
import { sign as JWTSign } from 'jsonwebtoken'
import nanoid from 'nanoid'
import User from '@models/user.model'

const userType = ({ _id, username }) => ({
  token: JWTSign(
    { _id, username },
    process.env.JWT_SECRET,
    { expiresIn: '6h' },
  ),
  user: {
    id: _id,
    username,
  },
})

export const createUser = async (_, { username, password }) => {
  const userID = nanoid(6)
  const user = await User.create({
    _id: userID,
    username,
    password: await bHash(password, 10),
  })

  return userType(user)
}

export const login = async (_, { username, password }) => {
  const user = await User.findOne({ username })
  if (!user) throw new Error('user does not exist')
  const validPassword = await bCompare(password, user.password)
  if (!validPassword) throw new Error('Incorrect password')

  return userType(user)
}
