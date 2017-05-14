var Twit = require('twit');
var config = require('../config');
var T = new Twit(config);
var fs = require('fs');

const readline = require('readline');

const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

read.question('Write the name of file, Please include the format.   ', (file)=>{container(file)});

function container(media){
	var filePath = '../media/'+media;

	var x =fs.existsSync(filePath);

	if(x == true){
		console.log("It might take some time. So Be Patient");
		T.postMediaChunked({ file_path: filePath }, call);


		function call(err , data, response) {
			if(!err){

				console.log("Video Uploaded successully");
				process.exit(0);

			}else{
				console.log("There is some issue, Try again");
				process.exit(1);
			}
		}		
	}else{
		console.log("Sorry that path doesn't exist: "+ filePath);
		process.exit(1);
	}
}