const assert = require('assert');
const calculator = require('./calculator');

assert.ok(calculator.add(1, 1));
assert.equal(calculator.add(1, 1), 2);

assert.notDeepStrictEqual({ id: 1 }, { id: 1, usr: 'Borel' }, 'Not strict equal');

assert.throws(() => {
  throw new Error('test');
}, Error('test'));
assert.doesNotThrow(() => {
  throw new Error('test');
}, 'It throws');
