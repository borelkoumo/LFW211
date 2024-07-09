'use strict';

if (require.main === module) {
  import('./format.mjs').then((format) => {
    console.log(format.upper('Hello'));
  });
}
