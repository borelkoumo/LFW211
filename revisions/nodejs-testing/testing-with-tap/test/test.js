const tape = require('tape')

const calculator = require('../calculator')

tape('test add integers 1 and 2', (t) => {
  t.plan(1)
  t.equal(calculator.add(1, 2), 3)
})
tape('test add the strings "1" and "2"', (t) => {
  t.plan(1)
  t.equal(calculator.add("1", "2"), 3)
  
})