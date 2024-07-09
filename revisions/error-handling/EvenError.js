class EvenError extends Error {
  constructor(varName = '') {
    super(`${varName} must be odd`);
    this.code = 'ERR_INPUT_MUST_BE_ODD';
    console.log(this.name)
  }
  // get name() {
  //   return this.name;
  //   // return `EvenError [${this.code}]`
  // }
}

function doTask(amount) {
  if (typeof amount !== 'number') {
    const err = new TypeError('Amount must be a numner');
    throw err;
  }
  if (amount <= 0) throw new RangeError('Amount must be > 0');
  if (!(amount % 2)) {
    const err = new EvenError('amount');
    throw err;
  }
  return amount / 2;
}

try {
  const result = doTask(2);
  console.log('result', result);
} catch (error) {
  console.error(error);
}
