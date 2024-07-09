'use strict';
const { inherits } = require('util');

function a() { };
a.prototype.move = function () {
  console.log('move')
}
a.prototype.turn = function () {
  console.log('turn')
}

console.log('a.prototype.constructor', a.prototype.constructor)

function b() {
  a.call(this);
};
inherits(b, a);
b.prototype.skip = function () {
  console.log('skip');
};
b.prototype.jig = function () {
  console.log('jig');
};
console.log('b.prototype.constructor', b.prototype.constructor)

function c() {
  b.call(this);
};
inherits(c, b);
c.prototype.sing = function () {
  console.log('sing');
};
c.prototype.dance = function () {
  console.log('dance');
};

const answer = new c()
answer.dance();
answer.skip();
answer.sing();
