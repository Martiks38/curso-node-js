var fs = require('fs')
console.log('\nAbriendo archivo...')

var content = fs.readFileSync('archivo.txt', 'utf-8')
console.log(content)

console.log('\nHaciendo otra cosa\n')
console.log(process.uptime())
