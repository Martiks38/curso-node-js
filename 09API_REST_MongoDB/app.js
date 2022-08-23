let express = require('express')
let app = express()

let bodyParser = require('body-parser')
let restful = require('express-method-override')('_method')
let morgan = require('morgan')
let pug = require('pug')
let favicon = require('serve-favicon')

let faviconURL = `${__dirname}/public/assets/android-icon-144x144.png`
let publicDir = express.static(`${__dirname}/public`)
let routes = require('./routes/movie-router')
let viewDir = `${__dirname}/views`

let port = process.env.PORT || 3000

app
  .set('views', viewDir)
  .set('view engine', 'pug')
  .set('port', port)
  .use(favicon(faviconURL))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(restful)
  .use(morgan('dev'))
  .use(publicDir)
  .use('/', routes)

module.exports = app
