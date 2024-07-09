const { EventEmitter } = require('events')

const myEE = new EventEmitter() 

process.nextTick(() => {
  myEE.emit('hello', 'Borel')
})

myEE.on('hello', (name) => {
  console.log(`Hello ${name}`)
})
