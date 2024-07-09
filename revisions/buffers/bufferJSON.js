const buffer = Buffer.from('👀');
const json = JSON.stringify(buffer);
const parsed = JSON.parse(json);

console.log(parsed);
console.log(Buffer.from(parsed.data));
