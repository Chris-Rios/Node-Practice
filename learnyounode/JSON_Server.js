// this is an http server that returns JSON data when it recieves iso-format time as 
// a value in the query string, and outputs it either in unix time, or hours minutes and seconds
// depending on the path, either /api/parsetime or /api/unixtime
var http = require("http");
var url = require("url");
var port = process.argv[2];

var server = http.createServer(function(request,response){
	var parsed_url = url.parse(request.url,true);
	var date = new Date(parsed_url.query.iso);

	if(parsed_url.path.indexOf("/api/parsetime")!=-1){
		response.writeHead(200,{'Content-Type':'application/json'});
		var hour = date.getHours();
		var min = date.getMinutes();
		var seconds = date.getSeconds();
		var date_time = JSON.stringify({"hour":hour,"minute":min,"second":seconds});
		response.write(date_time);
		response.end();
	}
	else if(parsed_url.path.indexOf("/api/unixtime")!=-1){
		response.writeHead(200,{'Content-Type':'application/json'});
		var unix_time = JSON.stringify({"unixtime":date.getTime()});
		response.write(unix_time);
		response.end();
	}
	else{
		response.end();
	}
});

server.listen(port);