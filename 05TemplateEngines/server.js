let app = require('./app')

let server = app.listen(
  app.get('port', () => {
    console.log(`Iniciando Express en el puerto ${app.get('port')}`)
  })
)
