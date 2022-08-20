'use strict'

const express = require('express')
const app = express()

const path = require('path')

const favicon = require('serve-favicon')
const jade = require('jade')
const morgan = require('morgan')

let faviconURL = `${__dirname}/public/assets/android-icon-144x144.png`
let publicDir = express.static(`${__dirname}/public`)
let viewDir = `${__dirname}/views`
let routes = require('./routes/index')

let port = process.env.PORT || 3000

app
  // Configurando app
  .set('views', viewDir)
  .set('view engine', 'jade')
  .set('port', port)
  // ejecutando middlewares
  .use(favicon(faviconURL))
  .use(morgan('dev'))
  .use(publicDir)
  // ejecuto el middleware Enrutador
  .use('/', (req, res) => {
    res.send('Hello from D!')
  })

module.exports = app
