const { access, constants } = require('fs')

const file = process.argv[2]

access(file, constants.R_OK | constants.W_OK, (err) => {
  console.log(`File '${file}' ${err ? 'does not ': ''}exists`)
})