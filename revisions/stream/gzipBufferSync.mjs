import fs from 'fs'
import { gzip } from 'zlib'
import { promisify } from 'util'

const gzipProm = promisify(gzip)

async function main () {
  const filename = process.argv[2]
  const data = fs.readFileSync(filename)
  const gzippedData = await gzipProm(data)
  fs.writeFileSync(`${filename}.gz`, gzippedData)
  console.log('File successfully compressed')
}

main()
