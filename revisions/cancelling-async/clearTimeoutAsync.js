const setTimeoutProm = require('util').promisify(setTimeout);

const timeout = setTimeoutProm(1000, 'Timeout end');

setImmediate(() => clearTimeout(timeout));

(async () => {
  console.log(await timeout);
})();
