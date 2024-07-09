'use strict'
const { setTimeout: setTimeoutProm } = require('timers/promises')

module.exports = async (url) => {
  await setTimeoutProm(500)
  if (url === 'http://error.com') {
    throw Error('invalid url')
  }  
  return Buffer.from('some data')
}