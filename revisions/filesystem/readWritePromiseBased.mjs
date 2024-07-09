import { readFile, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const destPath = join(__dirname, 'outProm.txt')

async function run () {
  const data = await readFile(__filename, { encoding: 'utf8' })
  await writeFile(destPath, data.toUpperCase())
  console.log(await readFile(destPath, { encoding: 'utf8' }))
}

run().catch((error)=> console.error(error))