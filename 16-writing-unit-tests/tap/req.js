'use strict'
module.exports = (url, cb) => {
  setTimeout(() => {
    if (url === 'http://error.com') {
      cb(new Error('network error'))
    }
    cb(null, Buffer.from('some data'))
  }, 500);
}