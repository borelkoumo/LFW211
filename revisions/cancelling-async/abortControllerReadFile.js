const ac = new AbortController();
const signal = ac.signal;

const { readFile } = require('fs').promises;

(async () => {
  const res = readFile('a.txt', { encoding: 'utf8', signal });
  ac.abort(new Error('sorry'));
  console.log(await res);
})();
