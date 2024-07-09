'use strict'
const uppercase = require('../uppercase')

test('should uppercase a string', () => {
  expect(uppercase('hello')).toBe('HELLO')
})
test('should raise an error', () => {
  try {
    uppercase(5)
  } catch (error) {
    expect(error).toStrictEqual(Error('input must be a string'))
  }
})