/* Event Inherit */

const EventEmitter = require('events').EventEmitter

class Clock extends EventEmitter {
  constructor() {
    super()
    ;(() =>
      setInterval(() => {
        this.emit('tictac')
      }, 1000))()
  }

  theTime() {
    let date = new Date()
    let hrs = ('0' + date.getHours()).slice(-2)
    let minutes = ('0' + date.getMinutes()).slice(-2)
    let seconds = ('0' + date.getSeconds()).slice(-2)

    console.log(`${hrs}:${minutes}:${seconds}`)
  }
}

let cucu = new Clock()

cucu.on('tictac', () => cucu.theTime())
