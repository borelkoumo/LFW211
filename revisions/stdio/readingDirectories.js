const { readdirSync, readdir } = require('fs');

try {
  console.log('sync', readdirSync(__dirname));
} catch (error) {}
