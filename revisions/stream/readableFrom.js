'use strict'
const { Readable } = require('stream')
const rs = Readable.from(['some', 'data', 'to', 'read'])
rs.on('data', (data) => { console.log(data) })
rs.on('end', () => console.log('end'))