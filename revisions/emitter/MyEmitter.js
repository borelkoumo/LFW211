const { EventEmitter } = require('events');

class MyEmitter extends EventEmitter {
  constructor(opts = {}) {
    super(opts);
    this.name = opts.name;
  }
  destroy(err) {
    if (err) {
      this.emit('error', err);
    }
    this.emit('close');
  }
}

const myEmitter = new EventEmitter('test');
myEmitter.on('an-event', () => {
  console.log('An event happened');
});
myEmitter.on('close', () => {
  console.log('EE closed');
});

myEmitter.emit('an-event');
myEmitter.emit('close');

