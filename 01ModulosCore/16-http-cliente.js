const http = require('http')

let options = {
  // host: 'jonmircha.com',
  host: 'bextlan.com',
  // port: 443,
  port: 80,
  path: '/', //Contenido por default "Home"
}

http
  .get(options, (res) => {
    console.log(
      `El sitio ${options.host} ha respondido. Código de Estado ${res.statusCode}`
    )
  })
  .on('error', (err) => {
    console.log(
      `El sitio ${options.host} no respondió. Código de Estado: ${err.code}. Error: ${err.message}`
    )
  })
