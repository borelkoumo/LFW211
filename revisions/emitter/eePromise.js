const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();
  process.nextTick(() => ee.emit('myevent', 42));

  const [value] = await once(ee, 'myevent');
  console.log(value);

  process.nextTick(() => ee.emit('error', new Error('Kaboom')));

  try {
    const [value] = await once(ee, 'myevent');
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}

run();
