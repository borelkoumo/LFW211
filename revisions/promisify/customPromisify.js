function promisify(fn) {
  return function prom(...args) {
    return new Promise((resolve, rejects) => {
      // console.log(args);
      function customCallback(err, ...results) {
        // console.log('err ccb ', err);
        // console.log('results ccb ', results);
        if (err) {
          rejects(err);
          return;
        }
        resolve(results.length === 1 ? results[0] : results);
      }
      args.push(customCallback);
      fn.call(this, ...args);
    });
  };
}

const increment = (number, cb) => {
  if (number > 100) {
    cb(Error('Number must be lower than 100'));
    return;
  }
  number++;
  cb(null, number);
};

// const incrementProm = promisify(increment);
// incrementProm(10)
//   .then((data) => {
//     console.log('incrementProm data ', data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const readFileProm = promisify(require('fs').readFile);
readFileProm('cancelling.js', 'utf8')
  .then((content) => {
    console.log(content);
  })
  .catch((err) => {
    console.log(err);
  });
