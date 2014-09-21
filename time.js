// tcp server that gives the time when connected to.
var net = require("net");
var port = process.argv[2];
var date = new Date();
var server = net.createServer(function(socket){
	console.log("incoming connection:"+socket.remoteAddress);
	var month = date.getMonth()+1;
	if(month<10){
		month ='0'+month;
	}
	socket.end(date.getFullYear()+"-"+month+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+"\n");
});

server.listen(port);