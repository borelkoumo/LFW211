function doSomethingAsynchronous (cb) {
  setTimeout(() => {
    cb(null, 10)
  }, 100);
}

// function myAsyncOperation (cb) {
//   doSomethingAsynchronous((err, value) => cb(err, value))
// }


// myAsyncOperation((err, value) => console.log(value))

// function myAsyncOperation2 (cb) {
//   return new Promise((resolve, reject) => {
//     doSomethingAsynchronous((err, value) => {
//       if (err) reject(err)
//       else resolve(value)
//     })
//   })
// }

// myAsyncOperation2().then((value)=> console.log(value))

const { promisify } = require('util')
function myAsyncOperation (cb) {
  doSomethingAsynchronous((err, value) => {
    cb(err, value)
  })
}

const asyncOpProm = promisify(myAsyncOperation)
asyncOpProm().then((value) => console.log(value))