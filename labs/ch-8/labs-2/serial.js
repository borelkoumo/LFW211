'use strict'
const { promisify } = require('util')

const print = (err, contents) => {
  if (err) console.error(err)
  else console.log(contents)
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

// const opAProm = promisify(opA)
// const opBProm = promisify(opB)
// const opCProm = promisify(opC)

// opAProm().then((res) => {
//   print(null, res)
//   opBProm().then((res) => {
//     print(null, res)
//     opCProm().then((res) => {
//       print(null, res)
//     })
//   })
// })

(async () => {
  const opAProm = promisify(opA)
  const opBProm = promisify(opB)
  const opCProm = promisify(opC)

  let res = await opAProm()
  print(null, res)
  res = await opBProm()
  print(null, res)
  res = await opCProm()
  print(null, res)
})()