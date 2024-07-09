'use strict'
const { EventEmitter } = require('events')

const ee = new EventEmitter({captureRejections:true})
ee.on('divide', function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    this.emit('error', new Error('Operands must be numbers'))
    return
  }
  if (b === 0) {
    this.emit('error', new Error('Division by 0 not allowed'))
    return
  }
  console.log(a/b)
})
const a= process.argv[2], b = process.argv[3]
ee.on('error', (error) => { console.log(error.message)})
ee.emit('divide', Number.parseInt(a, 10), Number.parseInt(b, 10))

