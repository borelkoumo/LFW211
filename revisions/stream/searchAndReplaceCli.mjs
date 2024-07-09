import { SearchAndReplace } from "./searchAndReplace.mjs";

process.stdin
  .pipe(new SearchAndReplace(process.argv[2], process.argv[3]))
  .pipe(process.stdout)
  .on('finish', () => {
    console.log('endend')
  })