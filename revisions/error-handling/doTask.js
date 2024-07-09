function doTask (amount) {
  if (typeof amount !== 'number') {
    const err = new TypeError('Amount must be a numner')
    throw err
  }
  if (amount <= 0) throw new RangeError('Amount must be > 0')
  if (amount % 2) {
    const err = Error('Amount must be even')
    err.code = 'ERR_MUST_BE_EVEN'
    throw err
  }
  return amount /2
}

doTask("3")