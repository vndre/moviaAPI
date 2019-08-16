import { Schema, model } from 'mongoose'
import nanoid from 'nanoid'

const ActorSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(10),
    },
    name: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    directors: [{
      type: String,
      ref: 'Director',
    }],
  },
)

export default model('Actor', ActorSchema)
