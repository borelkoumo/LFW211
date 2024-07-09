const tap = require('tap')
const add = require('../add')

tap.test('throws when inputs are not numbers', async (tap)=> {
  tap.throws(()=> add('5', '5'), Error('inputs must be numbers'))
  tap.throws(()=> add(5, '5'), Error('inputs must be numbers'))
  tap.throws(()=> add('5', 5), Error('inputs must be numbers'))
  tap.throws(()=> add({}, null), Error('inputs must be numbers'))
})

tap.test('adds two numbers', async (tap) => {
  tap.equal(add(5, 5), 10)
  tap.equal(add(-5, 5), 0)
})
