'use strict'
const divide = require('./divide')
const tap = require('tap')

tap.test('Hello', async (tap) => {
  tap.equal(divide(7, 8), 7/8)
  tap.throws(()=> divide('7', 8), Error('inputs must be numbers'))
  tap.notEqual(typeof divide(7, 8), false)
})
