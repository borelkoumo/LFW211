const assert = require('assert')
const pseudoReq = (url, cb) => {
  setTimeout(() => {
    if (url === 'http://error.com') {
      cb(new Error('network error'))
      return
    }
    cb(null, Buffer.from('some data'))
  }, 300);
}

pseudoReq('http://error.com', (err, data) => {
  try {
    assert.ifError(err)
    console.log('No error')
  } catch (error) {
    console.log('Error catched')
  }
  console.log(data)
})

pseudoReq('http://example.com', (err, data) => {
  assert.ifError(err)
  console.log(data)
})