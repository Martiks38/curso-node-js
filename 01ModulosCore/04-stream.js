/* Streams */
/* 
  "Corriente" de información que se transmiten en "Pedazos" ( chunks )
  3 tipos: Lectura / Escritura / Duplex
  Instancias de EventEmitter
  Acceso asíncrono
  Es raro crear streams directamente
  Pero muchos recursos nos ofrecen esta interfaz
  Detrás de muchos mecanismos de Node.js
    - stdin/stdout
    - request of http
    - sockets
    - manipulación de ficheros/imágenes
*/

const fs = require('fs')

let readStream = fs.createReadStream('../assets/nombres.txt')
let writeStream = fs.createWriteStream('../assets/copy_nombres.txt')

/* 
readStream.pipe(writeStream)

readStream.on('data', (chunck) => {
  console.log(`He leído: ${chunck.length} caracteres`)
  console.log(chunck.toString('utf-8'))
})

readStream.on('end', () => console.log('Terminé de leer el archivo'))
 */

readStream.pipe(writeStream)

readStream
  .on('data', (chunck) => {
    console.log(`He leído: ${chunck.length} caracteres`)
    console.log(chunck.toString('utf-8'))
  })
  .on('end', () => console.log('Terminé de leer el archivo'))
