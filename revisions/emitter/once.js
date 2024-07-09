const EventEmitter = require('events')

const myEE = new EventEmitter()
myEE.emit('error', new Error('Wtf error is this'))
const [dataL, startL, stopL] = [
  () => console.log('data listener fired'),
  () => console.log('start listener fired'),
  () => console.log('stop listener fired')
]
myEE.on('data', dataL)
myEE.on('start', startL)
myEE.on('stop', stopL)
myEE.removeAllListeners('data')
myEE.emit('data')
myEE.emit('start')