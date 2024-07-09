'use strict'
function log (text) {
  console.log(text)
}
module.exports = (url, cb) => {
  setTimeout(() => {
    if (url === 'http://error.com') {
      cb(new Error('network error'))
    }
    else {
      if (!url) {
        log('Hello')
        log('World')
      }
      cb(null, Buffer.from('some data'))
    }
  }, 500)
}