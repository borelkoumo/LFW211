'use strict'
console.log('initialized')
process.stdin.pipe(process.stdout)

// node -p "crypto.randomBytes(100).toString('hex')" | node stdio.js