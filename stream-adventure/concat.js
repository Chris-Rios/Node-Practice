//reverses a stream from stdin
var concat = require('concat-stream');
//concats into a single buffer, converts it to a string, splits and reverses it.
process.stdin.pipe(concat(function(body){
	console.log(body.toString().split("").reverse().join(""));
}));

