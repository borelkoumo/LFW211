import fsPromise from 'node:fs/promises'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url)

setTimeout(() => {
  console.log('in setTimeout')
}, 10);

console.log('A')
console.log('B')

const data = await fsPromise.readFile(__filename)
console.log(data.toString()[0])
console.log('C')