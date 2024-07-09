function codify (code, msg) {
  const err = new Error(msg)
  err.code = code
  return err
}

function doTask (amount) {
  if (typeof amount !== 'number') {
    throw codify('ERR_1', 'Amount must be a numner')
  }
  if (amount <= 0) {
    throw codify('ERR_2', 'Amount must be > 0')
  }
  if (amount % 2) {
    throw codify('ERR_3', 'Amount must be even')
  }
  return amount / 2
}

try {
  const result = doTask(4)
  result()
  console.log('result', result)
} catch (err) {
  if (err.code === 'ERR_AMOUNT_MUST_BE_NUMBER') {
    console.error('wrong type')
  } else if (err.code === 'ERRO_AMOUNT_MUST_EXCEED_ZERO') {
    console.error('out of range')
  } else if (err.code === 'ERR_MUST_BE_EVEN') {
    console.error('cannot be odd')
  } else {
    console.error('Unknown error', err)
  }
}