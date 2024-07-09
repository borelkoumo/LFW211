'use strict'
const net = require('net')

const socket = net.connect(3000)

const rand = "With a Duplex stream, both read and write methods are implemented but there doesn't have to be a causal relationship between them.".split(' ')
let i = 0

let interval = null

socket.on('connect', () => {
  interval = setInterval(() => {
    socket.write(rand[i++])
    if (i === rand.length) {
      socket.end()
    }
  }, 1000);
})

socket.on('data', (data) => {
  console.log('received from server : ', data.toString())
})

socket.on('end', () => {
  clearInterval(interval)
})
