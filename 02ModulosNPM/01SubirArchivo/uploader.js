// const http = require('http')
const util = require('util')
const formidable = require('formidable')
const fse = require('fs-extra')

const newServer = require('../../utils/server')

function serverUpload(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<h1>Hola Node.js</h1>')
}

newServer(serverUpload)
