'use strict'

const fs = require('fs')
const path = require('path')

function answer () {
  const dir = fs.readdirSync(__dirname)
  const currentFile = path.basename(__filename)
  const files = dir.filter((ent) => ent !== currentFile).map((file)=> path.join(__dirname, file))
  fs.writeFileSync('dir.json', JSON.stringify(files))
  console.log(files)
  console.log(dir, currentFile)
}

answer()