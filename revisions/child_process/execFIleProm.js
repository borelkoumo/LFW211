const { promisify } = require('util');

const execFile = promisify(require('child_process').execFile);

async function getNodeVersion() {
  const res = await execFile('node', ['--version']);
  console.log(res.stdout);
}

getNodeVersion()
