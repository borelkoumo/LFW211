'use strict'
module.exports = function divide (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('inputs must be numbers')
  }
  return a / b
}