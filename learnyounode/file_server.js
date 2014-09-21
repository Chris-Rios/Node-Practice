//Creates a simple file server that passes a provided file when connected to
var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];
console.log(port);
var server = http.createServer(function(req,res){
	var src = fs.createReadStream(file);
	src.pipe(res);
	return;
});
server.listen(port);