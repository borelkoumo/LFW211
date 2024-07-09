const { exec } = require('child_process');
exec(`echo "0" ; ls -l`, (err, stdout, stderr) => {
  if (err) {
    throw err;
  }
  console.log(stdout.toString());
  console.log(stderr.toString());
});
