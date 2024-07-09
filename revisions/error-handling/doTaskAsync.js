function codify (code, msg) {
  const err = new Error(msg)
  err.code = code
  return err
}

function doTask (amount) {
  return new Promise((resolve, reject) => {
    if (typeof amount !== 'number') {
      return reject(codify('ERR_1', 'Amount must be a numner'))
    }
    if (amount <= 0) {
      return reject(codify('ERR_2', 'Amount must be > 0'))
    }
    if (amount % 2) {
      return reject(codify('ERR_3', 'Amount must be even'))
    }
    resolve(amount / 2)
  })
}

doTask(2).then((value) => {
  throw Error('spanner in the works')
  console.log('value ', value)
})
  .catch((err) => {
    if (err.code === 'ERR_1') {
      console.error('wrong type')
    } else if (err.code === 'ERR_2') {
      console.error('out of range')
    } else if (err.code === 'ERR_3') {
      console.error('cannot be odd')
    } else {
      console.error('Unknown error', err)
    }
  })