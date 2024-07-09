'use strict'

const add = require('../add')

test('throws when inputs are not numbers', () => {
  expect(() => add('5', 'x')).toThrowError(Error('inputs must be numbers'))
})

test('adds two numbers', () => {
  expect(add(1, 1)).toStrictEqual(2)
})
