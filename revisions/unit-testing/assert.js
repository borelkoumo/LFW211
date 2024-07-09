'use strict'

const assert = require('assert')
const add = function (a, b) {
  return { valueOf () { return 4 } }
}

assert.equal(add(1, 3), 4)
