'use strict'
const { setTimeout: timeout } = require('timers/promises')

module.exports = async (url) => {
  await timeout(1000)
  if (url === 'http://error.com') {
    throw Error('network error')
  }
  return Buffer.from('some data')
}

require('fs').openSync('dsf', 'w')