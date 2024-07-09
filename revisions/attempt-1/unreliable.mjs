import { EventEmitter } from 'events';

class Unreliable extends EventEmitter {
  constructor() {
    super();
    this.initiatePing();
  }

  initiatePing() {
    // Simulate an unreliable operation that emits 'ping' event
    setTimeout(() => {
      if (Math.random() > 0.5) {
        this.emit('ping');
      } else {
        this.emit('error', new Error('Ping failed'));
      }
    }, Math.floor(Math.random() * 1000)); // Random delay between 0 and 1000ms
  }
}

export default Unreliable;
