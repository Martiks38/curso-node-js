let conn = require('./movie-connection')

class MovieModel {
  getAll(cb) {
    conn.find().exec((err, docs) => {
      if (err) throw err

      cb(docs)
    })
  }

  getOne(id, cb) {
    conn.findOne({ movie_id: id }).exec((err, doc) => {
      if (err) throw err

      cb(doc)
    })
  }

  save(data, cb) {
    let { movie_id, ...restMovieData } = data

    conn.count({ movie_id }).exec((err, count) => {
      if (err) throw err

      count === 0
        ? conn.create(data, (err) => {
            if (err) throw err

            cb()
          })
        : conn.findOneAndUpdate({ movie_id }, restMovieData, (err) => {
            if (err) throw err

            cb()
          })
    })
  }

  delete(id, cb) {
    conn.findOneAndDelete({ movie_id: id }, (err) => {
      if (err) throw err

      cb()
    })
  }
}

const movieModel = new MovieModel()

module.exports = movieModel
