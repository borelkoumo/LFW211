'use strict'

module.exports = (url, cb) => {
  setTimeout(() => {
    if (url === 'http://error.com') {
      cb(Error('invalid url'))
    }
    else {
      cb(null, Buffer.from('some data'))
    }
  }, 500);
}