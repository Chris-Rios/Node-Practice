//asynchronously reads a file and prints amount of newlines
var fs = require('fs');
console.log(fs.readFile(process.argv[2],'utf8',callback));

function callback(err,data){
	if(err){
		console.error(err);
	}
	else{
		return data.split('\n').length-1;
	}
}