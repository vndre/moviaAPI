import { Schema, model } from 'mongoose'
import nanoid from 'nanoid'

const UserSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(6),
    },
    username: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
)

export default model('User', UserSchema)
