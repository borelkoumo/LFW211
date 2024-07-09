'use strict';

console.log();
console.group('# package resolution');
console.log(`require('pino')`, '\t', ' =>', require.resolve('pino'));
console.log(`require('standard')`, '\t', ' =>', require.resolve('standard'));
console.groupEnd('');
console.log();
