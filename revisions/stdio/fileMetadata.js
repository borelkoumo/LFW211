const fs = require('fs');

function printMetadata(file) {
  const fileStats = fs.statSync(file);
  console.log(fileStats)
}
const file = process.argv[2]
printMetadata(file);
