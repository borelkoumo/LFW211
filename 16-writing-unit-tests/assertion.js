const assert = require('assert')

const {add1, add2} = require('./methods/add')

let  result = add1(2, 2)
assert.equal(result, 4)

result = add2(2, 2)
assert.equal(result, 4)


assert.strict.equal(add1(1, 1), 2)
assert.strictEqual(add2(1, 1), 2)