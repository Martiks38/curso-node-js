const express = require('express')

const app = express()

app
  .get('/', (req, res) => {
    res.end('<h1>Hola Mundo desde Express :)</h1>')
  })
  .get('/user/:id', (req, res) => {
    res.end(`<h1>Bienvenido a Express :) ${req.params.id}</h1>`)
  })
  .get('/user/:id/:name/:age', (req, res) => {
    // /user/19-martiks-26 no funciona
    // /user/19/martiks/26 funciona
    res.end(
      `<h1>${req.params.name}, bienvenido a Express :) tu id es <b>${req.params.id}</b> y tienes ${req.params.age} a&ntilde;os</h1>`
    )
  })
  .get('/search', (req, res) => {
    res.end(
      `<h1>Bienvenido a Express, los resultados de tu b&uacute;squeda son: <i>${req.query.q}</i></h1>`
    )
  })
  .listen(3000)

console.log('Iniciando Express en el puerto 3000')
