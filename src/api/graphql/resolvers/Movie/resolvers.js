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
    scoutbase_rating(_, __, { isLogged }) {
      if (!isLogged) {
        return 'You don\'t have permission to see this field, please log in first.'
      }
      const randomNum = () => ~~(Math.random() * 5) + 5
      return `${randomNum()}.${randomNum()}`
    },
  },
}
