//transforms lines from stdin, even lines get put into upper-case, odds into lower-case
var through = require("through");
var split = require("split");
var counter = 1;

process.stdin  //takes input from stdin
	.pipe(split())  //splits input
	.pipe(through(function(line){
		if(counter%2!==0){    //check if an even line is being outputted
			this.queue(line.toString().toLowerCase()+'\n'); 
		}
		else{
			this.queue(line.toString().toUpperCase()+'\n');
		}
		counter++;
	},function(){  //fills queue with null when input is finished
		this.queue(null);
	})).pipe(process.stdout); //pipes to stdout