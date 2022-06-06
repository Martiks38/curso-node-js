const fs = require('fs')
const newServer = require('../utils/server')

function webServer(req, res) {
  const readFile = (err, data) => {
    if (err) throw err
    res.end(data)
  }

  res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.readFile('../assets/index.html', readFile)
}

newServer(webServer)
