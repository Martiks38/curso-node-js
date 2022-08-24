const express = require('express')
const app = express()
const publicDir = express.static(`${__dirname}/public`)

const http = require('http').createServer(app)

const io = require('socket.io')(http)

const port = process.env.PORT || 3000

app.use(publicDir).get('/', (req, res) => {
  res.sendFile(`${publicDir}/index.html`)
})

http.listen(port, () => {
  console.log('Iniciando Express y Socket.IO en localhost:%d', port)
})

io.on('connection', (socket) => {
  socket.broadcast.emit('new user', {
    message: 'Ha entrado un usuario al chat',
  })

  socket.on('new message', (message) => {
    io.emit('user says', message)
  })

  socket.on('disconnect', () => {
    console.log('Ha salido un usuario del chat')
    socket.broadcast.emit('bye bye user', {
      message: 'Ha salido un usuario del Chat',
    })
  })
})
