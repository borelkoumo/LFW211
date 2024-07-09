'use strict'

const tap = require('tap')
const uppercase = require('../uppercase')

tap.test('should throw if wrong argument', async (tap) => {
  tap.throws(() => uppercase(5))
  tap.throws(() => uppercase(null))
  try {
    uppercase(null)
  } catch (error) {
    tap.type(error, Error)
    tap.strictSame(error, Error('input must be a string'))
  }

})
tap.test('should return uppercased string', async (tap) => {
  const input = 'hello'
  const result = uppercase(input)
  tap.strictSame(result, input.toUpperCase())
})