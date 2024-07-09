const { once, EventEmitter } = require('events');
const ac = new AbortController();
const { signal } = ac;

setTimeout(() => {
  ac.abort();
}, 1000);

const ee = new EventEmitter();
(async () => {
  try {
    await once(ee, 'fakeevent', { signal });
    console.log('fake event fired already');
  } catch (error) {
    console.log(error);
  }
})();
