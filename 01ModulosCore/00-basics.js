console.log('Hola mundo')

console.log(2 + 3)

// console.log(window) error window no existe en el servidor

//console.log(global) // global es el objeto global que contiene todo el servidor

let interval = setInterval(() => console.log('Hola Node.js'), 1000)

setTimeout(() => {
  clearInterval(interval)
}, 5100)
