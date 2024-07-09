const assert = require("assert")
const obj = { id: 1, name: { first: 'David', second: 'Clements' } }
const obj2 = { id: 1, name: 'bk' }

assert.deepEqual(obj2, obj)