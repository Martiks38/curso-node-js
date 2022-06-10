const express = require('express')

let app = express()

app
  .get('/', (req, res) => {
    let fileName = `${__dirname}/assets/index.html`

    res.sendFile(fileName)
  })
  .listen(3000)

console.log('Iniciando Express en el puerto 3000')
