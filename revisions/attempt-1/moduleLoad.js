'use strict';
if (require.main === module) {
  console.log('Is main module')
} else {
  module.exports = function (arg1, arg2) {
    return arg1 - arg2;
  };
}
