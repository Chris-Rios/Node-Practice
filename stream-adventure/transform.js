//takes a stream from stdin, transforms it into uppercase, writes it back through stdout
var through = require('through');
process.stdin.pipe(through(write,end));
var tr = through(write,end);//gets two functions, write and end
process.stdin.pipe(tr).pipe(process.stdout);//pipes what comes into std through tr, out to stdout

function write(buff){  //write function, happens on write to stdin
	this.queue(buff.toString().toUpperCase());
	}
function end(){ //end function, happens at the end of the stream for stdin
	this.queue(null);
}