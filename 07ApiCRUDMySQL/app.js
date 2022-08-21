let express = require('express')
let favicon = require('serve-favicon')
let bodyParser = require('body-parser')
let pug = require('pug')
let morgan = require('morgan')
let routes = require('./routes/index')
let faviconURL = `${__dirname}/public/assets/android-icon-144x144.png`
let publicDir = express.static(`${__dirname}/public`)
let viewDir = `${__dirname}/views`
let port = process.env.PORT || 3000
let app = express()

app
  .set('views', viewDir)
  .set('view engine', 'pug')
  .set('port', port)
  .use(favicon(faviconURL))
  // parse application/json
  .use(bodyParser.json())
  // parse application/x-www-form-urlencoded
  .use(bodyParser.urlencoded({ extended: false }))
  .use(morgan('dev'))
  .use(publicDir)
  .use('/', routes)

module.exports = app
