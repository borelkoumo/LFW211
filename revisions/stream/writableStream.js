'use strict'
const fs = require('fs')
const writable = fs.createWriteStream('./out.txt')
writable.on('finish', () => { console.log('finished writing') })
writable.write('some\n')
writable.write('data\n')
writable.write('to\n')
writable.write('read\n')
writable.end('nothing more to write\n')
