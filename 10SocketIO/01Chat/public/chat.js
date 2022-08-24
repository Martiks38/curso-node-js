;((d, io, $) => {
  let S_io = io()

  $('#chat-form').on('submit', (e) => {
    e.preventDefault()

    S_io.emit('new message', $('#message-text').val())
    $('#message-text').val(null)

    return false
  })

  S_io.on('new user', (newUser) => {
    alert(newUser.message)
  })

  S_io.on('user says', (userSays) => {
    $('#chat').append(`<li>${userSays}</li>`)
  })

  S_io.on('bye bye user', (byebyeUser) => {
    alert(byebyeUser.message)
  })
})(document, io, jQuery)
