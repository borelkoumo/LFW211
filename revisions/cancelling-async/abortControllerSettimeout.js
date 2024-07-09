const { setTimeout } = require('timers/promises');

const ac = new AbortController();
const { signal } = ac;

const timeout = setTimeout(1000, 'Hello world', { signal });

setImmediate(() => ac.abort(Error('Sorry')));

(async () => {
  console.log(await timeout);
})();
