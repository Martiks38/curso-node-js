const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

let app = express()

app
  .use(cookieParser())
  .use(cookieSession({ secret: 'secreto' }))
  .get('/', (req, res) => {
    req.session.visitas || (req.session.visitas = 0)
    let n = req.session.visitas++
    res.end(`
      <h1>
        Hola Mundo desde Express, me has visitado ${n} veces
      </h1>`)
  })
  .listen(3000)

console.log('Iniciando Express en el puerto 3000')
