'use strict';

const { spawn } = require('child_process');

process.env.A_VAR = 'Just set';
const sp = spawn(process.execPath, ['-p', 'process.env'], {
  env: { hello: 'world' },
});
sp.stdout.pipe(process.stdout);
