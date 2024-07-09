'use strict'
const net = require('net')
net.createServer((socket) => {
  socket.on('connect', () => {
    socket.write('Welcome to server.')
  })
  socket.on('data', (data) => {
    console.log('received from client : ', data.toString())
    socket.write(data.toString().toUpperCase())
  })
  socket.on('end', () => {
    console.log('Finished working')
  })
}).listen(3000)