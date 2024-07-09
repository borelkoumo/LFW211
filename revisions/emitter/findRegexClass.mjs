import EventEmitter from 'events'
import fs from 'fs'

class FindRegex extends EventEmitter {
  constructor (regex) {
    super()
    this.regex = regex
    this.files = []
  }

  addFile (file) {
    this.files.push(file)
    return this
  }

  findRegex () {
    for (const file of this.files) {
      fs.readFile(file, { encoding: 'utf8' }, (err, content) => {
        if (err) {
          this.emit('error', err, file)
          return
        }
        this.emit('fileread', file)
        const match = content.match(this.regex)
        if (match) {
          match.forEach((elem) => this.emit('found', file, elem))
        }
      })
    }
    return this
  }
}

new FindRegex(/file/g)
  .addFile('a.txt')
  .addFile('b.json')
  .findRegex()
  .on('fileread', file => console.log(`${file} was read`))
  .on('found', (file, elem) => { console.log(`${elem} found in ${file}`) })
  .on('error', (err, file) => { console.log(`Error occured in ${file}: ---> ${err.message}`) })