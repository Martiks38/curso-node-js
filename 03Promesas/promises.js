const fs = require('fs')

let file = './assets/nombres.txt'
let newFile = './assets/nombres-promises.txt'
let promise = new Promise((resolve, reject) => {
  fs.access(file, fs.constants.F_OK, (err) => {
    err ? reject(new Error('El archivo no existe')) : resolve(true)
  })
})

promise
  .then(() => {
    console.log('El archivo existe')

    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        return err
          ? reject(new Error('El archivo no se pudo leer'))
          : resolve(data.toString())
      })
    })
  })
  .then((data, reject) => {
    console.log('El archivo se ha leído exitosamente')

    return new Promise((resolve, reject) => {
      fs.writeFile(newFile, data, (err) => {
        return err
          ? reject(new Error('El archivo no se pudo copiar'))
          : resolve('El archivo se ha copiado con éxito')
      })
    })
  })
  .then((resolve, reject) => console.log(resolve))
  .catch((err) => console.log(err.message))
