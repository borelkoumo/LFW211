const tap = require('tap')

const add = require('../../common/add')

// Testing input validations
tap.test('throw when inputs are not numbers', async (tap) => {
  tap.throws(() => add('5', 5), Error('input must be number'))
  tap.throws(() => add({}, 5), Error('input must be number'))
})

// Testing required output
tap.test('add two numbers', async (tap) => {
  tap.equal(add(5, 5), 10)
  tap.equal(add(5, -5), 0)
})
