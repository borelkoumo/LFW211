import { setTimeout } from "timers/promises";

const ac = new AbortController()
const timeout = setTimeout(1000, 'will not be logged', { signal: ac.signal });

setImmediate(() => {
  ac.abort()
})

try {
  console.log(await timeout)
} catch (error) {
  if (error.code !== 'ABORT_ERR') throw error
}