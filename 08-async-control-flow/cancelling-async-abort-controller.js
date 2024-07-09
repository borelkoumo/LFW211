const { setTimeout: setTimeoutAsync } = require('node:timers/promises')

const ac = new AbortController()
const timeout = setTimeoutAsync(100, 'Hello', { signal: ac.signal })

setImmediate(() => {
  ac.abort()
});

(async () => {
  console.log(await timeout)
})()