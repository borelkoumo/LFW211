const EventEmitter = require('events');

class Chrono extends EventEmitter {
  constructor () {
    super();
    this.startTime = null;
    this.stopTime = null;
  }
  run () {
    this.startTime = Date.now();
    this.emit('start', this._formatTime(this.startTime));
  }
  stop () {
    if (!this.startTime) {
      this.emit('error', 'Chronometer was not started!');
      return
    }
    this.stopTime = Date.now();
    const elapsed = this.stopTime - this.startTime;
    this.emit('stop', this._formatTime(this.stopTime), elapsed);
  }
  _formatTime (timeInMilliseconds) {
    const date = new Date(timeInMilliseconds)
    const [h, m, s] =
      [date.getHours(), date.getMinutes(), date.getSeconds()].map((e) => e.toString().padStart(2, '0'))
    return `${h}:${m}:${s}`
  }
}

const chrono = new Chrono();

chrono.on('start', (startTime) => {
  console.log(`Chronometer started at: ${startTime}`);
  setTimeout(() => {
    chrono.stop();
  }, Math.floor(Math.random() * 10000));
});

chrono.prependListener('start', () => {
  console.log('Début de tour de chrono pour le joueur')
})

chrono.on('stop', (stopTime, elapsed) => {
  console.log(`Chronometer stopped at: ${stopTime}; elapsed time: ${Math.ceil(elapsed/1000)} sec`);
});

chrono.on('error', (message) => {
  console.error(message);
});

chrono.run();