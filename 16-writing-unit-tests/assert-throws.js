const assert = require('assert')
const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('inputs must be numbers')
  }
  return a+b
}

assert.throws(() => add('1' + '2'), Error('inputs must be numbers'))
assert.doesNotThrow(()=> add(5, 5))