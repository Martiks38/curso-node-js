let app = require('./app.js')

let server = app.listen(
  app.get('port', () => {
    console.log(`Iniciando Express en el puerto ${app.get('port')}`)
  })
)
