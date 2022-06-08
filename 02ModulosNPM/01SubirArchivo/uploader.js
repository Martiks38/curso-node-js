const util = require('util')
const formidable = require('formidable')
const fse = require('fs-extra')

const newServer = require('../../utils/server')

function serverUpload(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    let $form = `
      <h3>Uploader de Archivos en Node.js</h3>
      <form action="/upload" enctype="multipart/form-data" method="POST">
        <label>Archivo: 
          <input type="file" name="upload" required />
        </label>
        <br />
        <input type="submit" value="Subir archivo" />
      </form>
    `
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end($form)
  }

  if (req.method === 'POST' && req.url === '/upload') {
    let form = new formidable.IncomingForm()

    form
      .parse(req, (err, fields, files) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(
          `<h1>Archivos Recibidos</h1>
          <br/>
          <a href="/">Regresar</a> 
          <pre><code>${util.inspect({ fields: files })}</code></pre>`
        )
        res.end()
      })
      .on('progress', (bytesReceived, bytesExpected) => {
        let percentComplete = (bytesReceived / bytesExpected) * 100
        console.log(percentComplete.toFixed(2) + '%')
      })
      .on('error', (err) => {
        console.log(err)
      })
      .on('file', (formname, file) => {
        // Ubicación temporal del archivo que se sube
        let tempPath = file.filepath
        let fileName = file.originalFilename
        let newLocation = './upload/' + fileName

        fse.copy(tempPath, newLocation, (err) =>
          err
            ? console.log(err)
            : console.log('El archivo se subió con éxito 😄')
        )
      })

    return
  }
}

newServer(serverUpload)

/* Observación */
/* 
  Si el archivo ya está no hace un nuevo archivo con algún agregado en el nombre como llamarlo archivo(1).pdf (supongo que lo reemplaza)
*/
