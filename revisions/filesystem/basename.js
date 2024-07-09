const path = require('path')
console.log(`__filename --> ${__filename}`)
console.log(`path.dirname --> ${path.dirname(__filename)}`)
console.log(`path.basename --> ${path.basename(__filename)}`)
console.log(`path.ext --> ${path.extname(__filename)}`)
console.log('\n')
console.log(`path.parse --> ${JSON.stringify(path.parse(__filename), null, 2)}`)
console.log('\n')
const path1 = '../../hello/world'
const path2 = 'kanguka/../../../../'
console.log(`${path1} and ${path2} resolves to ${path.resolve(path1, path2)}`)
