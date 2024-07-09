const fs = require('fs')
const { execSync } = require('child_process')

const file = process.argv[2]

if (!file) {
  console.error('Specify a file')
  process.exit(1)
}

try {
  fs.accessSync(file)
  console.error('File already exists')
  process.exit(1)
} catch (error) {
  makeIt(file)
  // makeItEfficient(file)
}
function makeIt (file) {
  // File doesn exist
  // Create it, set the UID and GID to nobody, and set access permissions to 000
  const nobody = Number(execSync('id -u nobody').toString().trim())
  fs.writeFileSync(file, 'Hello World')
  fs.chmodSync(file, 0)
  fs.chownSync(file, nobody, nobody)
  console.log(file, ' created')
}

function makeItEfficient (file) {
  const nobody = Number(execSync('id -u nobody').toString().trim())
  const fd = fs.openSync(file, 'w')
  fs.writeSync(fd, 'Hello World', { mode: nobody })
  fs.fchownSync(fd, nobody, nobody)
  fs.fchmodSync(fd, 0)
  console.log(file + ' created')
}