//filtered ls, but using custom module 
var mymodule = require('./modular.js');
mymodule(process.argv[2],process.argv[3],function(err,args){
	if(err){
		console.log("error");
	}
	for (var i = 0, len = args.length; i <len; i++) {
		console.log(args[i]);
	}
});