let movies = require('../models/movies')
let express = require('express')
let router = express.Router()

const error404 = (req, res, next) => {
  let error = new Error()

  let locals = {
    title: 'Error 404',
    description: 'Recurso No Encontrado',
    error,
  }

  error.status = 404

  res.render('error', locals)

  next()
}

router
  .use(movies)
  .get('/', (req, res, next) => {
    req.getConnection((err, movies) => {
      if (err) return next(new Error('No hay registros de películas'))

      movies.query('SELECT * FROM movie', (err, rows) => {
        let locals = {
          verbAction: 'Lista Películas',
          data: rows,
        }

        res.render('index', locals)
      })
    })
  })
  .get('/agregar', (req, res, next) => {
    res.render('add-movie', { title: 'Agregar Película' })
  })
  .post('/', (req, res, next) => {
    req.getConnection((err, movies) => {
      if (err) return next(err)

      let movie = {
        movie_id: req.body.movie_id,
        title: req.body.title,
        release_year: req.body.release_year,
        rating: req.body.rating,
        img: req.body.image,
      }

      console.log(movie)

      movies.query('insert into movie set ?', movie, (err, rows) => {
        return err ? next(new Error('Error al insertar')) : res.redirect('/')
      })
    })
  })
  .get('/editar/:movie_id', (req, res, next) => {
    let movie_id = req.params.movie_id
    console.log(movie_id)

    req.getConnection((err, movies) => {
      movies.query(
        'select * from movie where movie_id = ?',
        movie_id,
        (err, rows) => {
          console.log(err, '---', rows)

          if (err) return next(new Error('Registro no encontrado'))

          let locals = {
            verbAction: 'Editar',
            data: rows,
          }

          res.render('edit-movie', locals)
        }
      )
    })
  })
  .post('/actualizar/:movie_id', (req, res, err) => {
    req.getConnection((err, movies) => {
      if (err) return next(err)

      let movie = {
        movie_id: req.body.movie_id,
        title: req.body.title,
        release_year: req.body.release_year,
        rating: req.body.rating,
        img: req.body.image,
      }

      console.log(movie)

      movies.query(
        'update movie set ? where movie_id = ?',
        [movie, movie.movie_id],
        (err, rows) => {
          return err
            ? next(new Error('Error al actualizar'))
            : res.redirect('/')
        }
      )
    })
  })
  .post('/eliminar/:movie_id', (req, res, next) => {
    let movie_id = req.params.movie_id

    req.getConnection((err, movies) => {
      movies.query(
        'delete from movie where movie_id = ?',
        movie_id,
        (err, rows) => {
          console.log(err, '---', rows)

          return err
            ? next(new Error('Registro No Encontrado'))
            : res.redirect('/')
        }
      )
    })
  })
  .use(error404)

module.exports = router
