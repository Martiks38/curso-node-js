let express = require('express')
let router = express.Router()

let MovieController = require('../controllers/movie-controller')

router
  .get('/', MovieController.getAll)
  .get('/agregar', MovieController.addForm)
  .post('/', MovieController.insert)
  .get('/editar/:movie_id', MovieController.getOne)
  .post('/actualizar/:movie_id', MovieController.update)
  .post('/eliminar/:movie_id', MovieController.delete)
  .use(MovieController.error404)

module.exports = router
