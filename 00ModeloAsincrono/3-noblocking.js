var fs = require('fs')
console.log('\nAbriendo archivo')

var content = fs.readFile('archivo.txt', 'utf-8', function (error, content) {
  console.log(content)
})

console.log('\nHaciendo otra cosa\n')
console.log(process.uptime())
