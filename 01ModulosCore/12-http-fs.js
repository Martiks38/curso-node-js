const http = require('http')
const fs = require('fs')

const hostname = 'localhost'
const port = 3000

function webServer(req, res) {
  const readFile = (err, data) => {
    if (err) throw err
    res.end(data)
  }

  res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.readFile('assets/index.html', readFile)
}

http
  .createServer(webServer)
  .listen(port, hostname, () =>
    console.log(`Servidor corriendo en http://${hostname}:${port}/`)
  )
