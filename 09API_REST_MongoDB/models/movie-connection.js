let conf = require('./db-conf.json').mongo

let mongoose = require('mongoose')
let Schema = mongoose.Schema

const MovieSchema = new Schema(
  {
    movie_id: 'string',
    title: 'string',
    release_year: 'string',
    rating: 'string',
    img: 'string',
  },
  { collection: 'movie' }
)

const MovieModel = mongoose.model('Movie', MovieSchema)

mongoose.connect(`mongodb://${conf.host}/${conf.database}`)

module.exports = MovieModel
