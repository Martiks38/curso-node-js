const myData = require('./my-data.js')
const Clock = require('./clock-es5.js')

let cucu = new Clock()

console.log(myData)

cucu.on('tictac', () => cucu.theTime())
