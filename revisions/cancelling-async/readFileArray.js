const { readFile } = require('fs').promises;

const files = Array.from(Array(3)).fill('a.txt');
const data = [];

const print = (content) => {
  console.log(content);
};

// Serial execution of then/catch

function read(index) {
  return readFile(files[index], 'utf-8').then((content) => {
    index++;
    data.push(content);
    if (index < files.length) {
      return read(index);
    }
    return data
  });
}

read(0).then((data) => print(data));
