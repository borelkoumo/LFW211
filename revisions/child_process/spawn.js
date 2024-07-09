'use strict';

const { spawn } = require('child_process');

const sp = spawn('ls', ['-l']);

sp.stdout.on('data', (data) => {
  console.log('received', data.toString());
  console.log();
});

sp.stderr.on('data', (data) => {
  console.log('data', data.toString());
});

sp.on('close', (statusCode) => {
  console.log('close', statusCode);
});

console.log('PID is ', sp.pid)
