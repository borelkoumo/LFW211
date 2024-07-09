const { EventEmitter } = require('events');
const fs = require('fs');

function findRegex(files, regex) {
  const emitter = new EventEmitter();
  for (const file of files) {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        emitter.emit('error', err);
        return;
      }
      emitter.emit('fileread', file);
      const match = data.match(regex);
      if (match) {
        match.forEach((elem) => emitter.emit('found', elem));
      } else {
        emitter.emit('notfound', file);
      }
    });
  }
  return emitter;
}

findRegex(['a.txt', 'b.txt'], /this/g)
  .on('fileread', (file) => console.log('File : ', file))
  .on('found', (elem) => console.log(`Found element ${elem}`))
  .on('notfound', (file) => console.log('Nothing found in file ', file))
  .on('error', (err) => console.log(`Error occured : ${err.message}`));
