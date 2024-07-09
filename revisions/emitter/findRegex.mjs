import { EventEmitter } from "events";
import fs, { readFile } from 'fs'

function findRegex (files, regex) {
  const emitter = new EventEmitter()
  for (const file of files) {
    fs.readFile(file, { encoding: 'utf8' }, (err, content) => {
      if (err) {
        emitter.emit('error', err, file)
        return
      }
      emitter.emit('fileread', file)
      const match = content.match(regex)
      if (match) {
        match.forEach((elem) => emitter.emit('found', file, elem))
      }
    })
  }
  return emitter
}

findRegex(['a.txt', 'b.json'], /file/g)
  .on('fileread', file => console.log(`${file} was read`))
  .on('found', (file, elem)=> {console.log(`${elem} found in ${file}`)})
  .on('error', (err, file) => { console.log(`Error occured in ${file}: ---> ${err.message}`) })