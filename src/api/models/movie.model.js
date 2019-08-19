import { Schema, model } from 'mongoose'
import nanoid from 'nanoid'

const MovieSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(10),
    },
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    actors: [{
      type: String,
      ref: 'Actor',
    }],
  },
)

export default model('Movie', MovieSchema)
