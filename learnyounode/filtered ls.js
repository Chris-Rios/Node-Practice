//filtered ls by a given file type
var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var filter = process.argv[3];

fs.readdir(directory,callback);

function callback(err,list){
	if(err){
		console.log(err);
	}
	for (var i =0;i<list.length;i++){
		if(path.extname(list[i])==="."+filter){
			console.log(list[i]);
		}
	}
}