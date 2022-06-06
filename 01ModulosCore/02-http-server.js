// Ejemplo de Node.js
/* const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, hostname, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
) */

// Nuevo caso
'use strict'
const http = require('http')

const hostname = 'localhost'
const port = 3000

function webServer(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<h1>Hello World</h1>')
}

const server = http.createServer(webServer)

server.listen(port, hostname, () =>
  console.log(`Servidor corriendo en http://${hostname}:${port}/`)
)
