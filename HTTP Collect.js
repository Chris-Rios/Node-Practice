//performs a get on a given url, however stores everything in a buffered list
var http = require("http");
var bl = require('bl'); //buffer list

http.get(process.argv[2],function(response){
	response.pipe(bl(function(err,data){
		console.log(data.length);
		console.log(data.toString());
	}));
});