const { EventEmitter } = require('events');
const fs = require('fs');

class FindRegex extends EventEmitter {
  constructor(regex) {
    super();
    this.regex = regex;
    this.files = [];
  }

  addFile(file) {
    this.files.push(file);
    return this;
  }

  find() {
    for (const file of this.files) {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          this.emit('error', err);
          return;
        }
        this.emit('fileread', file);
        const match = data.match(this.regex);
        if (match) {
          match.forEach((elem) => this.emit('found', elem));
        } else {
          this.emit('notfound', file);
        }
      });
    }
    return this;
  }
}

const fr = new FindRegex(/Event Loop/g);

fr.addFile('a.txt')
  .addFile('b.txt')
  .find()
  .on('fileread', (file) => console.log('File : ', file))
  .on('found', (elem) => console.log(`Found element ${elem}`))
  .on('notfound', (file) => console.log('Nothing found in file ', file))
  .on('error', (err) => console.log(`Error occured : ${err.message}`));
