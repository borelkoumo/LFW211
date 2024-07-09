const { readFile } = require('fs')

function myAsyncOperation () {
  return new Promise((resolve, reject) => {
    doSomethingAsynchronous((err, value) => {
      if (err) reject(err)
      else resolve(value)
    })
  })
}

function doSomethingAsynchronous (cb) {
  readFile(__filename, cb)  
}

(async () => {
  myAsyncOperation()
    .then((data) => console.log(data.toString()))
    .catch((error) => console.error(error))
})()