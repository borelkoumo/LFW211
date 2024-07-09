'use strict'

const { join } = require('path')

const { readFileSync, writeFileSync } = require('fs')
const content = readFileSync(__filename, { encoding: 'utf8' })
writeFileSync(join(__dirname, 'out.txt'), content.toUpperCase(), { flag: 'a' })