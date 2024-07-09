const { Transform, pipeline } = require('stream');

console.log(process.stdin.isTTY ? 'Source: Terminal' : 'Source: Shell pipe');

pipeline(
  process.stdin,
  new Transform({
    transform(chunk, enc, next) {
      this.push(chunk.toString().toUpperCase());
      next();
    },
  }),
  process.stdout,
  (err) => {
    console.log('An error occured: ', err);
  }
);
