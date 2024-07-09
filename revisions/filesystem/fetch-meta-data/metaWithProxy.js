const fs = require('fs')
const path = require('path')
const Table = require('cli-table')

class CustomTable {
  constructor (table) {
    this.table = table
  }
  arrowDown (f) {
    this.table.push([`\u21B3 ${f}`])
  }
  newline () {
    this.table.push(Array(this.table.options.head.length).fill(''))
  }
}

function createCustomTable (options) {
  const table = new Table(options)
  const customTable = new CustomTable(table)

  return new Proxy(customTable, {
    get: (target, property) => {
      // If property is in Table, use it, otherwise, use CustomTable property
      // TODO: this should be inversed actually, because it's not allowing to override some parent's behaviour
      // TODO, switch this ternary condition, but take into account toString() method, in order to use the Table.toString mehod instead of CustomTable.toString method
      const obj = target.table[property] ? target.table : target
      if (typeof obj[property] === 'function') {
        return (...args) => {
          const result = obj[property].apply(obj, args);
          return result;
        };
      }
      return obj[property];
    }
  })
}

const customTable = createCustomTable({
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