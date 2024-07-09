const { execSync } = require('child_process');
try {
  const stdout = execSync(`echo "0" ; ls -l`);
  console.log(stdout.toString());
} catch (error) {
  console.log(error);
}
