const fs = require('node:fs')

let path = './assets/nombres.txt'
let newFile = './assets/nombres-callback.txt'

fs.open(path, (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.log('El archivo no existe')
      return
    }
    throw err
  }

  try {
    fs.readFile(path, (err, data) => {
      if (err) throw err

      fs.writeFile(newFile, data, (err) =>
        err
          ? 'El archivo no se pudo copiar'
          : 'El archivo se copio exitosamente'
      )
    })
  } finally {
    fs.close(fd, (err) => {
      if (err) throw err
    })
  }
})
