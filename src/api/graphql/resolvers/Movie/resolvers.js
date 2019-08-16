import Actor from '@models/actor.model'

export default {
  Movie: {
    async actors(movie) {
      return Actor.find({
        _id: {
          $in: movie.actors,
        },
      })
    },
  },
}
