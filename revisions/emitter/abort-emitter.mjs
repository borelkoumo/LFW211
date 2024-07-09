import EventEmitter, { once } from "events";

const uneventfull = new EventEmitter()
const ac = new AbortController()

setTimeout(() => {
  ac.abort()
}, 10000);

async function run () {
  try {
    await once(uneventfull, 'ping', { signal: ac.signal })
    console.log('pinged!')
  } catch (error) {
    if (error.code !== 'ABORT_ERR') throw error
    console.log('cancelled')
  }
}

run()