const express = require('express')

const app = express()

app
  .get('/', (req, res) => {
    // res.end('<h1>Hola Mundo desde Express :)</h1>')
    res.end('<h1>Hola Mundo desde Express :)</h1>')
  })
  .get('/products', (req, res) => {
    res.end('<h1>Lista de productos</h1>')
  })
  .get('/json', (req, res) => {
    res.json({
      name: 'Martiks',
      age: 31,
      twitter: '@jonmircha',
    })
  })
  // .get('/render', (req, res) => {
  // res.render('assest/index.html')
  // res.render(`${__dirname}/assest/index.html`)
  // })
  .listen(3000)

console.log('Iniciando Express en el puerto 3000')
