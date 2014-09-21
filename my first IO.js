//reads the amount of newlines in a given file.
var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);  //returns a buffer
var str = buffer.toString();
var split = str.split('\n');
console.log(split.length-1);