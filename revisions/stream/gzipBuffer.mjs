import { promises as fs } from 'fs'
import { gzip } from 'zlib'
import { promisify } from 'util'

const gzipProm = promisify(gzip)
const filename = process.argv[2]

async function main () {
  const data = await fs.readFile(filename)
  const gzippedData = await gzipProm(data)
  await fs.writeFile(`${filename}.gz`, gzippedData)
  console.log('File successfully compressed')
}

main()
