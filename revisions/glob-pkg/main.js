import glob from 'glob'
glob('../*.js', (err, files) => {
  if (err) {
    return console.error(err)
  }
  console.log(`All files found ${JSON.stringify(files)}`)
}).on('match', (match) => console.log(`Match found: ${match}`))