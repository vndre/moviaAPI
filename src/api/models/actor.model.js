import { Schema, model } from 'mongoose'

const ActorSchema = new Schema(
  {
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

export default model('Actor', ActorSchema)
