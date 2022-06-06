const http = require('http')

let options = {
  host: 'www.mediotiempo.com',
  port: 80,
  path: '/', //Contenido por default "Home"
}
let htmlCode = ''

function httpCLient(res) {
  console.log(
    `El sitio ${options.host} ha respondido. Código de Estado ${res.statusCode}`
  )

  res.on('data', (data) => {
    htmlCode += data
    console.log(data, data.toString())
  })
}

function httpError(err) {
  console.log(
    `El sitio ${options.host} no respondió. Código de Estado: ${err.code}. Error: ${err.message}`
  )
}

function webServer(req, res) {
  res.writeHead(200, { 'content-Type': 'text/html' })
  res.end(htmlCode)
}

// Instancia cliente de HTTP
http.get(options, httpCLient).on('error', httpError)

// Instancia servidor de HTTP
http
  .createServer(webServer)
  .listen(3000, () =>
    console.log('Servidor corriendo en http://localhost:3000')
  )
