let MovieModel = require('../models/movieModel')

class MovieController {
  getAll(req, res, next) {
    MovieModel.getAll((err, rows) => {
      let direction = ''
      let locals = {}

      if (err) {
        direction = 'error'
        locals = {
          title: 'Error al consultar la base de datos',
          description: 'Error de Sintaxis SQL',
          error: err,
        }
      } else {
        direction = 'index'
        locals = {
          verbAction: 'Lista de películas',
          data: rows,
        }
      }

      res.render(direction, locals)
    })
  }

  getOne(req, res, next) {
    let movie_id = req.params.movie_id

    MovieModel.getOne(movie_id, (err, rows) => {
      if (err) {
        let locals = {
          title: `Error al consultar el registro con el id: ${movie_id}`,
          description: 'Error de Sintaxis SQL',
          error: err,
        }

        res.render('error', locals)
      } else {
        let locals = {
          title: 'Editar',
          data: rows,
        }

        res.render('edit-movie', locals)
      }
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

    MovieModel.save(movie, (err) => {
      if (err) {
        let locals = {
          title: `Error al salvar el registro con id: ${movie.movie_id}`,
          description: 'Error de Sintaxis SQL',
          error: err,
        }
        res.render('error', locals)
      } else {
        res.redirect('/')
      }
    })
  }

  // insert(req, res, next) {
  //   let movie = {
  //     movie_id: req.body.movie_id,
  //     title: req.body.title,
  //     release_year: req.body.release_year,
  //     rating: req.body.rating,
  //     img: req.body.image,
  //   }

  //   MovieModel.insert(movie, (err) => {
  //     if (err) {
  //       let locals = {
  //         title: `Error al agregar el registro con id ${movie.movie_id}`,
  //         description: 'Error de Sintaxis SQL',
  //         error: err,
  //       }

  //       res.render('error', locals)
  //     } else {
  //       res.redirect('/')
  //     }
  //   })
  // }

  // update(req, res, next) {
  //   let movie = {
  //     movie_id: req.body.movie_id,
  //     title: req.body.title,
  //     release_year: req.body.release_year,
  //     rating: req.body.rating,
  //     img: req.body.image,
  //   }

  //   MovieModel.update(movie, (err) => {
  //     if (err) {
  //       let locals = {
  //         title: `Error al actualizar el registro con id: ${movie.movie_id}`,
  //         description: 'Error de Sintaxis SQL',
  //         error: err,
  //       }

  //       res.render('error', locals)
  //     } else {
  //       res.redirect('/')
  //     }
  //   })
  // }

  delete(req, res, next) {
    let movie_id = req.params.movie_id

    MovieModel.delete(movie_id, (err) => {
      if (err) {
        let locals = {
          title: `Error al eliminar el registro con id: ${movie.movie_id}`,
          description: 'Error de Sintaxis SQL',
          error: err,
        }

        res.render('error', locals)
      } else {
        res.redirect('/')
      }
    })
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
