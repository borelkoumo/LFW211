import path from 'path';
import { fileURLToPath } from 'url';

console.log(process.argv[1]);
console.log(fileURLToPath(import.meta.url));
