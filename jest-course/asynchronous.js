module.exports = {
  callback: function fetchData (url, cb) {
    setTimeout(() => {
      cb(null, 'some data')
    }, 1000);
  },
  promises: async function fetchData (url, cb) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'http://error.com') {
          reject(Error('sorry'))
        }
        resolve('some data')
      }, 1000)
    })
  }
}