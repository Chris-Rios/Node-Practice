//filtered ls to be called by modular_caller
var fs = require('fs');
var path = require('path');
module.exports = function filtered(directory,filter,callback){
	fs.readdir(directory,function(err,list){
		if(err){
			callback(err);
		}
		else{
			var result = [];
			for (var i =0;i<list.length;i++){
		if(path.extname(list[i])==="."+filter){
			result.push(list[i]);
		}
	}
			callback(null,result);
		}
	});

};