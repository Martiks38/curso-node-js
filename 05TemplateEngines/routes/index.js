'use strict'
let express = require('express')
let router = express.Router()

const jade = (req, res, next) => {
  let locals = {
    title: 'Jade',
    link: 'https://pugjs.org/api/getting-started.html',
    description:
      'Jade es un "template engine" (motor de plantillas) de alto performance, enfocado en permitir escribir código HTML de forma rápida. Podríamos decir que se trata de un pre-procesador de código HTML; similar a stylus, sass o less con respecto a CSS. Jade es fuertement influenciado por HAML e implementado para JavaScript con Node. Jade usa la Indentación(sangrado) para definir la jerarquía de nuestro documento HTML, no tendremos que escribir tags html < />, estos serán generados por jade al momento de compilar nuestro código jade.',
  }
  res.render('index', locals)
}

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
  .get('/', (req, res) => {
    res.end('<h1>Configuración de la App en Express</h1>')
  })
  .get('/jade', jade)
  .use(error404)

module.exports = router
