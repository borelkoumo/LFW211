const assert = require('assert')

const pseudoReq = (url) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (url === 'https://error.com') {
      reject(new Error('Network Error'))
    }
    resolve(Buffer.from('some data'))
  }, 1000);
})


pseudoReq('https://example.com')
  .then((data) => {
    console.log(data.toString())
  })
  .catch(error => {
    console.log(error)
  })

pseudoReq('https://error.com')
  .then((data) => {
    console.log(data.toString())
  })
  .catch(error => {
    assert.ifError(error)
  })

  