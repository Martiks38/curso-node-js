let express = require('express')
let router = express.Router()

let MovieController = require('../controllers/movie-controller')

router
  .get('/', MovieController.getAll)
  .get('/agregar', MovieController.addForm)
  .post('/', MovieController.save)
  .get('/editar/:movie_id', MovieController.getOne)
  .put('/actualizar/:movie_id', MovieController.save)
  .delete('/eliminar/:movie_id', MovieController.delete)
  .use(MovieController.error404)

module.exports = router
