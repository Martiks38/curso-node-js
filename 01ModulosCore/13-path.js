const http = require('http')
const path = require('path')

const hostname = 'localhost'
const port = 3000

let urls = [
  {
    route: '',
    output: '<h2>Home</h2>',
  },
  {
    route: 'acerca',
    output: '<h2>Acerca</h2>',
  },
  {
    route: 'contacto',
    output: '<h2>Contacto</h2>',
  },
]

function webServer(req, res) {
  let msg = '<h1>Hola Node.js</h1>'
  let pathURL = path.basename(req.url)

  console.log(pathURL)

  urls.forEach((url) => {
    if (url.route === pathURL) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(msg + url.output)
    }
  })

  if (!res.finished) {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end('<h1>Error 404: Not Found</h1>')
  }
}

http
  .createServer(webServer)
  .listen(port, hostname, () =>
    console.log(`Servidor corriendo en http://${hostname}:${port}/`)
  )
