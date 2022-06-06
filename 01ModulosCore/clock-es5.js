let Clock = (function () {
  const EventEmitter = require('events').EventEmitter

  class Clock extends EventEmitter {
    constructor() {
      super()
      ;(() =>
        setInterval(() => {
          this.emit('tictac')
        }, 1000))()
    }

    #zeroAdd(number, isHour = false) {
      if (isHour && number > 12) {
        number -= 12
      }

      return number < 10 ? '0' + number : number
    }

    theTime() {
      let date = new Date()
      let isPm = date.getHours() > 12
      let hrs = this.#zeroAdd(date.getHours(), isPm)
      let minutes = this.#zeroAdd(date.getMinutes())
      let seconds = this.#zeroAdd(date.getSeconds())

      console.log(`${hrs}:${minutes}:${seconds} ${isPm ? 'PM' : 'AM'}`)
    }
  }

  return Clock
})()

module.exports = Clock
