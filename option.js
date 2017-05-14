const readline = require('readline');

const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
console.log('Hi there, These are the option which you can use. \n');

var x = 1;

function option(){
	console.log("  -v 	  Upload Video \n"+
				"  -i 	  Upload Image \n"+
				"  -m 	  Reply to the recent 10 users \n"+
				"  -p 	  Tweet \n"+
				"  A -m 	  Send message to user who follow you \n"+
				"  A -r 	  Send quote to users according to the feeling \n");
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function xreq(){
	read.question('', (func)=>{ 
		if(typeof func == 'string'){
			switch(func){
				case '-v':
							video();
					break;
				case '-i':
							upload();
					break;
				case '-m':
							recent_message();
					break;
				case '-p':
							post();
					break;
				case 'A -m':
							message();
					break;
				case 'A -r':
							retweet();
					break;
				default:
					process.stdout.write('\033c');
					console.log('Please choose from the list.\n');
					option();
					console.log("\033[31m", "COULD NOT FOUND THAT COMMAND. PLEASE CHOOSE FROM ABOVE.ERROR NO: "+ x + "\n", "\033[0m");

					x += 1;
					xreq();	
			}
		}
	});
}



option();
xreq();


function post(){
	var post = require('./src/post.js');
}

function follower(){
	var follower = require('./src/follower.js');
}

function message(){
	var message = require('./src/message.js');
}

function recent_message(){
	var recent_message = require('./src/recent_message.js');
}

function retweet(){
	var retweet = require('./src/retweet.js');
}

function upload(){
	var upload = require('./src/upload.js');
}

function video(){
	var video = require('./src/video.js');
}



    // "start": "node option.js",
    // "-v": "./src/video.js",
    // "-i": "./src/upload.js",
    // "-m": "./src/recent-message.js",
    // "-p": "./src/post.js",
    // "A -m": "./src/message.js",
    // "A -r": "./src/retweet.js",
    // "test": "echo \"Error: no test specified\" && exit 1"