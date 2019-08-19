import { Schema, model } from 'mongoose'
import nanoid from 'nanoid'

const DirectorSchema = new Schema(
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
  },
)

export default model('Director', DirectorSchema)
