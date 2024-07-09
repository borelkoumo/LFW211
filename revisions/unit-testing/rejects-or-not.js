const assert = require('assert')

const { setTimeout: timeout } = require('timers/promises')
const pseudoReq = async (url) => {
  await timeout(1000)
  if (url === 'http://error.com') {
    throw new Error('network error')
  }
  return Buffer.from('some data')
}

assert.doesNotReject(() => pseudoReq('http://example.com'))
assert.rejects(() => pseudoReq('http://error.com'));

(async () => {
  console.log('start')
  await timeout(3000)
  console.log('end')
})()