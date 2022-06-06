/* Buffers */
/* 
  Son una tira de bytes (datos binarios)
  Similar a un array de enteros
  Tamaño fijo
  Manipular datos directamente
    Sockets
    Streams
    Implementar protocolos complejos
    Manipulación de ficheros/imágenes
    Criptografía
*/

'use strict'

// import { Buffer } from 'node:buffer'
const { Buffer } = require('node:buffer')

let buf = Buffer.alloc(100)
let buf2 = Buffer.alloc(26)

const STR = '\u00bd + \u00bc = \u00be'

buf.write('abcd', 0, 4, 'ascii')

console.log(buf)
console.log(STR.toString('ascii'))
console.log(STR)
console.log(STR.length + ' caracteres')
console.log(`La constante STR ocupa ${Buffer.byteLength(STR, 'utf-8')} bytes`)

for (let i = 0; i < buf2.length; i++) {
  // 97 en ASCII es a
  buf2[i] = i + 97
}

console.log(buf2.toString('ascii'))
