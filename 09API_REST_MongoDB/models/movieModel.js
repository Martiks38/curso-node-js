let conn = require('./movie-connection')

class MovieModel {
  getAll(cb) {
    let query = 'select * from movie'
    conn.query(query, cb)
  }

  getOne(id, cb) {
    let query = 'select * from movie where movie_id = ?'
    conn.query(query, id, cb)
  }

  save(data, cb) {
    const insertOrUpdate = (err, rows) => {
      if (err) return err

      let query

      if (rows.length == 1) {
        query = 'update movie set ? where movie_id = ?'
        conn.query(query, [data, data.movie_id], cb)
      } else {
        query = 'insert into movie set ?'
        conn.query(query, data, cb)
      }
    }

    conn.query(
      'select * from movie where movie_id = ?',
      data.movie_id,
      insertOrUpdate
    )
  }

  // insert(data, cb) {
  //   let query = 'insert into movie set ?'
  //   conn.query(query, data, cb)
  // }

  // update(data, cb) {
  //   let query = 'update movie set ? where movie_id = ?'
  //   conn.query(query, [data, data.movie_id], cb)
  // }

  delete(id, cb) {
    let query = 'delete from movie where movie_id = ?'
    conn.query(query, id, cb)
  }
}

const movieModel = new MovieModel()

module.exports = movieModel
