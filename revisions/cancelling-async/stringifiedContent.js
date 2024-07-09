const { readFile } = require('fs').promises;

const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill('a.txt');

const print = (content) => {
  console.log(content.toString());
};

readFile(bigFile)
  .then((content) => {
    print(content);
    return readFile(mediumFile);
  })
  .then((content) => {
    print(content);
    return readFile(smallFile);
  })
  .then((content) => {
    print(content);
  });
