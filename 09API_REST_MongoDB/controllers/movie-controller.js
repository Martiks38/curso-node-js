let MovieModel = require('../models/movieModel')

class MovieController {
  getAll(req, res, next) {
    MovieModel.getAll((docs) => {
      let direction = ''
      let locals = {
        verbAction: 'Lista de películas',
        data: docs,
      }

      res.render(direction, locals)
    })
  }

  getOne(req, res, next) {
    let movie_id = req.params.movie_id

    MovieModel.getOne(movie_id, (doc) => {
      let locals = {
        title: 'Editar',
        data: doc,
      }
      res.render('edit-movie', locals)
    })
  }

  save(req, res, next) {
    let movie = {
      movie_id: req.body.movie_id,
      title: req.body.title,
      release_year: req.body.release_year,
      rating: req.body.rating,
      img: req.body.image,
    }

    MovieModel.save(movie, () => res.redirect('/'))
  }

  delete(req, res, next) {
    let movie_id = req.params.movie_id

    MovieModel.delete(movie_id, () => res.redirect('/'))
  }

  addForm(req, res, next) {
    res.render('add-movie', {
      verbAction: 'Agregar',
      title: 'Agregar Película',
    })
  }

  error404(req, res, next) {
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
}

const movieController = new MovieController()

module.exports = movieController
