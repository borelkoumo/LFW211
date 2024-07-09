const { execFile } = require('child_process');

const child = execFile('node', ['--versions'], (err, stdout, stderr) => {
  if (err) {
    console.log({ stderr });
    throw err;
  }
  console.log({ stdout });
});

console.log({ child });
