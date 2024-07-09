'use strict'
const { readdirSync, statSync } = require('fs')
const { sep, resolve, basename, join, normalize } = require('path')
const basePath = '../'
let depth = 0
let pathDepth = 0

function print (path) {
  const initialDepth = path.split(sep).length

  recursivePrint(0, path)

  function recursivePrint (currentDepth, path) {
    if (currentDepth === initialDepth - 1) {
      const normalizedPath = resolve(path)
      const stat = statSync(normalizedPath)
      if (stat.isFile()) {
        console.log(basename(normalizedPath))
      }
      else if (stat.isDirectory()) {
        console.group(path.slice(path.lastIndexOf('/') + 1) + '/')
        const files = readdirSync(path)
        for (const file of files) {
          recursivePrint(currentDepth, join(path, file))
        }
        console.groupEnd()
      }
      else {
        console.log('unknown type')
      }
    } else {
      console.group(`${path.split(sep)[currentDepth]}/`)
      recursivePrint(currentDepth + 1, path)
      console.groupEnd()
    }
  }
}


print(process.argv[2])