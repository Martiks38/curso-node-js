let mysql = require('mysql')
let myConnection = require('express-myconnection')

let dbOptions = {
  host: 'localhost',
  user: 'root',
  password: '#42069810surI',
  port: 3306,
  database: 'movies',
}

const Movies = myConnection(mysql, dbOptions, 'request')

module.exports = Movies
