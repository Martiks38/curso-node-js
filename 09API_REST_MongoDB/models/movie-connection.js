let mysql = require('mysql')
const conf = require('./db-conf.json').mysql

let dbOptions = {
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
}

let myConn = mysql.createConnection(dbOptions)

myConn.connect((err) => {
  return err
    ? console.log(`Error al Conectarse a MySQL: ${err.stack}`)
    : console.log(`Conexión establecida con MySQL N° ${myConn.threadId}`)
})

module.exports = myConn
