// simple http server that converts incoming post messages to uppercase
var http = require("http");
var port = process.argv[2];
var map = require("through2-map");
var server = http.createServer(function(request,response){
	if(request.method !== "POST"){
		return response.end("I am sorry this server only takes post requests");
	}
	request.pipe(map(function(chunk){  //pipes the request to through2-map function 
		return chunk.toString().toUpperCase(); //converts to string, uppercases
	})).pipe(response);  //writes it to the response
});

server.listen(port);