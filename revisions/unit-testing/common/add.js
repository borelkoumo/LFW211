'use strict'
module.exports = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('input must be number')
  }
  return a + b
}