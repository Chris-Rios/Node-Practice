//performs http gets on 3 different urls asynchronously
var http = require('http');
var return_count;
var queue  = [];
var bl = require('bl');
var count = 0;

function print(){
	for (var i = 0; i < 3; i++){
		console.log(queue[i].toString());
	}
}

for(var i = 0;i < 3; i++){
	getUrl(i);
}

function getUrl(index){
	http.get(process.argv[2+index],function(response){
		response.pipe(bl(function(error,data){
			if(error){
				console.error(error);
			}
			queue[index] = data;
			count++;
			if(count === 3){
				print();
			}
		}));
	});
}



