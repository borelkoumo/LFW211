import { EventEmitter } from "node:events"

const myEE = new EventEmitter()

myEE.on('event', () => {
  console.log('a')
})
myEE.prependListener('event', () => {
  console.log('b')
})

myEE.emit('event')