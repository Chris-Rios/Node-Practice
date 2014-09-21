var args = process.argv;
var sum = 0;

for(var i = 2;i<args.length;i++){
	if(Number(args[i])){
		sum+=Number(args[i]);
	}
	else{
		console.log(args[i]+" is not a number");
	}
}
console.log(sum);