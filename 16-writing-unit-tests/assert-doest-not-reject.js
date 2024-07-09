const assert = require('assert')

const { setTimeout: timeout } = require('timers/promises')

const pseudoAxios = async (website) => {
  await timeout(1000)
  const url = new URL(website)
  return Buffer.from('Response data')
}

assert.doesNotReject(pseudoAxios('https://good.com'))
assert.rejects(pseudoAxios('bad.com'))