const http = require('http').createServer()
const fs = require('fs')
const index = fs.createReadStream('../assets/index.html')

const hostname = 'localhost'
const port = 3000

function webServer(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  index.pipe(res)
}

http
  .on('request', webServer)
  .listen(port, hostname, () =>
    console.log(`Servidor corriendo en http://${hostname}:${port}/`)
  )
