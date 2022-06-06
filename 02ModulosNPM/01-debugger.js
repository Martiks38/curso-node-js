/*
    Hacer debug con el core de Node.js
    https://nodejs.org/api/debugger.html
    En la terminal ejecutar: node inspect (name archive.js)
*/

const newServer = require('../utils/server')

function webServer(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  debugger
  res.end('<h1>Hola mundo</h1>')
}

newServer(webServer)
