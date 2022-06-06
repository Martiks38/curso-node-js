let stdin = process.stdin
let stdout = process.stdout

const person = {
  name: null,
  age: 0,
}

const saveAge = (age) => {
  person.age = age

  age >= 16
    ? stdout.write(
        `${person.name} es mayor de edad, tiene ${person.age} años.\n`
      )
    : stdout.write(
        `${person.name} es menor de edad, tiene ${person.age} años.\n`
      )

  process.exit()
}

const saveName = (name) => {
  person.name = name

  // Vuelvo a preguntar
  let question = `Hola ${person.name}. ¿Cuántos años tienes? `

  quiz(question, saveAge)
}

const quiz = (question, callback) => {
  stdin.resume()
  stdout.write(question + ': ')
  stdin.once('data', (res) => {
    callback(res.toString().trim())
  })
}

stdin.setEncoding('utf-8')
quiz('¿Cómo te llamas?', saveName)
