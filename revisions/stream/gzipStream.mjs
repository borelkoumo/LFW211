import { createReadStream, createWriteStream } from "fs";
import { finished } from "stream";
import { createGzip } from "zlib";

function main () {
  const filename = process.argv[2]
  const pipe = createReadStream(filename)
    .pipe(createGzip())
    .pipe(createWriteStream(`${filename}.gz`))
    
  finished(pipe, (err) => {
    if (err) {
      console.error('Error during compression ==> ', err.message)
    }
    console.log('File successfully compressed')
  })
}

main()