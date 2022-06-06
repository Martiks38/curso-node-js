// const http = require('http')
const form = require('fs').readFileSync('../assets/form.html')
const querystring = require('querystring')
const util = require('util')
const newServer = require('../utils/server')

let dataString = ''

function webServer(req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(form)
  }

  if (req.method === 'POST') {
    req
      .on('data', (data) => {
        dataString += data
      })
      .on('end', () => {
        let params = new URLSearchParams(dataString)

        let templateStringString = `Los datos que enviaste por POST como string son:\nstring: ${dataString}\n`
        let templateStringObject = `Los datos que enviaste por POST como objeto son:\nobject: ${params}\nNombre: ${params.get(
          'nombre'
        )}\nEmail: ${params.get('email')}`
        console.log(templateStringString + templateStringObject)
        let dataJSON = util.inspect(params)
        console.log(`JSON: ${dataJSON}`)
        console.log(`JSON: ${JSON.stringify(dataJSON)}`)
        res.end(templateStringString + templateStringObject)
      })
  }
}

newServer(webServer)
