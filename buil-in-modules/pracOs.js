const os = require('os');

var totatlMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totatlMemory}`);
console.log(`Total Memory: ${freeMemory}`);