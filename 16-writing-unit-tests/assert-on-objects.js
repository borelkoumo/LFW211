const assert = require('assert')

const obj = { id: 1, name: { first: 'David', second: 'Clements' } }

assert.equal(obj, { id: 1, name: { first: 'David', second: 'Clements' } }) // False
assert.deepEqual(obj, { id: '1', name: { first: 'David', second: 'Clements' } }) // True
assert.deepEqual(obj, { id: '1', name: { first: 'David', second: 'Clements' }, age: 20 }) // False
assert.deepStrictEqual(obj, { id: 1, name: { first: 'David', second: 'Clements' } }) // True