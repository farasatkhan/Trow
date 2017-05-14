// Not connected

var Twit = require('twit');
var config = require('../config');
var T = new Twit(config);

const readline = require('readline');

const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

read.question('Do you want to post? (Y/N)  ', (ans)=>{
	var x = ans.toLowerCase();

	if(typeof x == 'string'){
		if(x === 'y'){
				yes();
		}else{
			console.log('You closed the file');
			process.exit(0);
		}
	}

});

function yes(){
	read.question('Write your post to tweet?   ', (tweet)=>{ tweetr(tweet);})
}

function tweetr(tweet){
	var statToPost = {
	status: tweet,
	}

	T.post('statuses/update', statToPost, tweeted);

	function tweeted(err, data, response){
		if(!err){
			console.log("Tweeted Successfully");
			process.exit(0);
		}else{
			console.log("There is some issue, Please Try again or fix the Problem");
		}
		
	}
}