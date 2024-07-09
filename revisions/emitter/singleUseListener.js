const { EventEmitter } = require('events');
const ee = new EventEmitter();

const listener1 = () => console.log('listener 1 running');
const listener2 = () => console.log('listener 2 running');

ee.on('my-event', () => console.log('my event'));
ee.on('my-event', listener1);
ee.on('my-event', listener2);
ee.emit('my-event');

setTimeout(() => {
  ee.removeListener('my-event', listener1);
  ee.removeListener('my-event', listener2);
  ee.emit('my-event');
}, 1000);
