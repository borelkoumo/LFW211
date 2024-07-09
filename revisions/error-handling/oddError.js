class OddError extends Error {
  constructor (varName = '') {
    super(`${varName} must be even`)
    this.code = 'ERR_INPUT_MUST_BE_EVEN'
  }
  get name () {
    return `OddError [${this.code}]`
  }
}

function doTask (amount) {
  if (typeof amount !== 'number') {
    const err = new TypeError('Amount must be a numner')
    throw err
  }
  if (amount <= 0) throw new RangeError('Amount must be > 0')
  if (amount % 2) {
    const err = new OddError('amount')
    throw err
  }
  return amount / 2
}

try {
  const result = doTask(3)
  console.log('result', result)
} catch (error) {
  console.error(error)
}