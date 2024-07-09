const { EventEmitter } = require('events')

class MyCustomEventEmitter extends EventEmitter {
  constructor () {
    super()
    process.nextTick(() => {
      this.emit('hello', 'from constructor')
    })
  }
}

const myCustomEE = new MyCustomEventEmitter()
myCustomEE.on('hello', (name) => {
  console.log(`Hello ${name}`)
})
