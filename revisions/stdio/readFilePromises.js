const fs = require('fs/promises');
const path = require('path');

const filepath = path.join(process.cwd(), 'hello.txt');
async function run() {
  try {
    const contents = await fs.readFile(filepath, 'utf8');
    console.log(contents)
  } catch (error) {}
}
