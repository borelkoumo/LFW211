const fs = require('fs');
const path = require('path');

const contents = fs.readFileSync(path.join(process.cwd(), 'hello.txt'), 'utf8');
console.log(process);
