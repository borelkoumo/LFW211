function promisify(callbackBasedApi) {
  return function promisified(...args) {
    return new Promise((resolve, reject) => {
      const newArgs = [
        ...args,
        function (err, ...results) {
          if (err) {
            reject(err);
          } else {
            resolve(results.length === 1 ? results[0] : results);
          }
        },
      ];
      callbackBasedApi(...newArgs);
    });
  };
}

const { randomBytes } = require('crypto');
const randomBytesProm = promisify(randomBytes);

randomBytesProm(32).then((buffer) => {
  console.log(buffer);
});
