const { EventEmitter } = require('events')

class MyEventEmitter extends EventEmitter {
  constructor (opts = {}) {
    super(opts)
    this.name = opts.name
  }
  destroy (err) {
    if (err) this.emit('error', err)
    else this.emit('close')
  }
}

const me = new MyEventEmitter('custom-ee')
me.on('add', (a, b) => console.log(a + b))
me.emit('add', 1, 2)
