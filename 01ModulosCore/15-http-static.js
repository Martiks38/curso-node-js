const http = require('http')
const fs = require('fs')
const path = require('path')

const hostname = 'localhost'
const port = 3000

let urls = [
  {
    id: 1,
    route: '',
    output: '../assets/index.html',
  },
  {
    id: 2,
    route: 'acerca',
    output: '../assets/acerca.html',
  },
  {
    id: 3,
    route: 'contacto',
    output: '../assets/contacto.html',
  },
]

function webServer(req, res) {
  let pathURL = path.basename(req.url)
  let id = new URLSearchParams(pathURL).get('id')

  console.log(`path: ${pathURL}, id:${id}`)

  urls.forEach((url) => {
    if (url.route === pathURL || url.id === id) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      fs.readFile(url.output, (err, data) => {
        if (err) throw err
        res.end(data)
      })
    }
  })

  if (!res.finished) {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    fs.readFile('../assets/404.html', (err, data) => {
      if (err) throw err
      res.end(data)
    })
  }
}

http
  .createServer(webServer)
  .listen(port, hostname, () =>
    console.log(`Servidor corriendo en http://${hostname}:${port}/`)
  )
