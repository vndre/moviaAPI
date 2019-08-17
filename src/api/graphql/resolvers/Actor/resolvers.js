import Director from '@models/director.model'

export default {
  Actor: {
    async directors(actor) {
      return Director.find({
        _id: {
          $in: actor.directors,
        },
      })
    },
  },
}
