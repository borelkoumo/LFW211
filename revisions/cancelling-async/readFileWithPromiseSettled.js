const { readFile } = require('fs').promises;

const files = ['a.txt', null, 'b.txt', 'a.txt'];
const data = [];

const print = (results) => {
  console.log(results);
};

Promise.allSettled(files.map((file) => readFile(file, 'utf-8'))).then((results) => {
  print(
    results
      .filter((result) => result.status === 'fulfilled')
      .map(({ value }) => value)
  );
  // print(
  //   results
  //     .filter((result) => result.status === 'rejected')
  //     .map((result) => result.reason)
  // );
});
