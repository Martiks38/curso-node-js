// Node se maneja con el patron observador

let EventEmmiter = require('events').EventEmitter

let pub = new EventEmmiter()

pub.on('myevent', (msg) => console.log(msg))

pub.once('myevent', (msg) =>
  console.log(`Se emite la primera vez el siguiente mensaje: ${msg}`)
)

pub.emit('myevent', 'Soy un emisor de eventos')
pub.emit('myevent', 'Volviendo a emitir')
