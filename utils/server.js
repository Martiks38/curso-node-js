const http = require('http')
const { port, hostname } = require('../const/portHostname')

function newServer(webServer) {
  http
    .createServer(webServer)
    .listen(port, hostname, () =>
      console.log('Servidor corriendo en http://localhost:3000')
    )
}

module.exports = newServer
