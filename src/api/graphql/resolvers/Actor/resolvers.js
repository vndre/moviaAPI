import Director from '@models/director.model'
import mongoose from 'mongoose'

export default {
  Actor: {
    async directors(actor) {
      console.log('Actor directors resolver')

      await Director.find({
        _id: {
          $in: actor.directors.map((director) => mongoose.Types.ObjectId(director.id)),
        },
      })
    },
  },
}
