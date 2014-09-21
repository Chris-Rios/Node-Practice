//http client that performs a get from a given url
var http = require('http');
var url = process.argv[2];

http.get(url,function(response){
	response.setEncoding('utf8');
	response.on("data",console.log);
	response.on("error",console.error);
});



function callback(response){
	console.log(response);
}