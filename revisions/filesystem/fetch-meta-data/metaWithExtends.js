const fs = require('fs')
const path = require('path')
const Table = require('cli-table')

class CustomTable extends Table {
  constructor (options) {
    super(options)
  }
  arrowDown (f) {
    this.push([`\u21B3 ${f}`])
  }
  newline () {
    this.push(Array(this.options.head.length).fill(''))
  }
}

const customTable = new CustomTable({
  head: ['Name', 'Created', 'DeviceId', 'Mode', 'Lnks', 'Size'],
  colWidths: [20, 30, 10, 10, 6, 10]
})

function print (dir) {
  fs.readdirSync(dir)
    .map((file) => ({ file, dir }))
    .map(toMeta)
    .forEach(output)
  console.log(customTable.toString());
}

function toMeta ({ file, dir }) {
  const stats = fs.statSync(path.join(dir, file))
  let { birthtime, ino, mode, nlink, size } = stats
  birthtime = birthtime.toLocaleString()
  mode = mode
  size = `${Math.fround(size / 1024).toFixed(2)} KB`
  return {
    file, dir, info: [birthtime, ino, mode, nlink, size], isDir: stats.isDirectory()
  }
}

function output ({ file, dir, info, isDir }) {
  customTable.push([file, ...info])
  if (!isDir) {
    return
  }
  const p = path.join(dir, file)
  fs.readdirSync(p).forEach((f) => {
    const stats = fs.statSync(path.join(p, f))
    const style = stats.isDirectory() ? 'bold' : 'dim'
    customTable.arrowDown(f)
  })
  customTable.newline()
}

print(process.argv[2] || '.')