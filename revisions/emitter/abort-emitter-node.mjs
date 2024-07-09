import { EventEmitter, once } from 'node:events';
import { setTimeout } from 'node:timers/promises';

const sometimesLaggy = new EventEmitter();
const ac = new AbortController();

setTimeout(2000 * Math.random(), null, { signal: ac.signal }).then(() => {
  sometimesLaggy.emit('ping')
}).catch((error) => {
  if (error.name !== 'AbortError') { throw error }
})

setTimeout(500, null).then(() => {
  ac.abort()
})

try {
  await once(sometimesLaggy, 'ping', { signal: ac.signal })
  console.log('pinged')
} catch (error) {
  // ignore abort errors:
  if (error.name !== 'AbortError') { throw error }
  console.log('cancelled')
}