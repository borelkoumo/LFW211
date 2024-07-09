'use strict'
const fs = require('fs')
const writable = fs.createWriteStream('./out.txt')
writable.on('finish', () => { console.log('Finished writing') })
writable.write('A\n')
writable.write('B\n')
writable.write('C\n')
writable.end('Nothing more to write')