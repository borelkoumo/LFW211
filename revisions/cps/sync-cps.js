function addCps (a, b, callback) {
  callback(a + b)
}

function callback (c) {
  console.log('c is ', c)
}