import { concatFiles } from "./concatFiles.mjs";  

async function main () {
  try {
    await concatFiles(process.argv[2], process.argv.slice(3))
    console.log('All files concatenated successfully')
  } catch (error) {
    console.error(err)
    process.exit(1)
  }
}
main()