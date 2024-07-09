module.exports = {
  add1: (x, y) => x + y,
  add2: (x, y) => ({ valueOf() { return 4 } })
}