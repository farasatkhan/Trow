var Twit = require('twit');
var config = require("../config");
var fs = require('fs');
var T = new Twit(config);

var feel = "";

var num = 1;

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


function reaction(react){
	T.get('search/tweets', {q: '#' + react, count: 1}, searched);
	console.log("Searcing, Waiting for callback");
}


function searched(err, data, response){
	if(!err){
		
		var fs = require('fs');
		var json = JSON.stringify(data, null, 1);
 		fs.writeFile("tweet.json", json);
 		wait(1000 * 5)
 		console.log("Wrote to the file called tweet.json");
 		credentials(data);
	}else{
		return console.log("There is a problem");
	}
}

function credentials(JSON){

	var xz = JSON.statuses;

	if (xz == undefined || xz == null || xz.length == 0){
    	console.log("Array is empty");
    	setInterval(randCategory, 1000 * 20);
	}

	var username = JSON.statuses[0].user.screen_name;
	var text = JSON.statuses[0].text;


		function readEmotion(){

			var file = "../emotion/" + feel + ".txt";


			var fs = require('fs');
			var line = fs.readFileSync(file).toString().split("\n");
			for(i in line) {
			    line[i];
			}


				var sudoRandom = Math.floor(Math.random() * line.length);
				var randomLine = line[sudoRandom];


			 	console.log("Got a Quote from Array");


				 	var newtweet = "@" + username+ " " + randomLine;

				 	if(newtweet.length > 140){
				 		randCategory();
				 	}

 
				 	var undefine = "@" + username + " undefined";

					if(!(newtweet == undefine)){
						tweetIt(newtweet);
						feel = "";
					}else{
						console.log("Tweet is undefined");
					}

		}

		readEmotion();

}

function tweetIt(txt){

	var tweet = {
	status: txt,
	}

	T.post('statuses/update', tweet, tweeted);


	function tweeted(err, data, response){
		if(err){
			console.log(err);
		}else{
			console.log("Tweeted successfully");
			console.log("--------------------");
			num += 1;
		}
	}
}

function randCategory(){

	var rand = Math.floor((Math.random() * 7) + 1);

	switch(rand){
		case 1:
				console.log("Sad, Tweet No " + num);
				console.log('--------------------');
	

				feel += "sad";
				
				reaction(feel);
				break;
		case 2:
				console.log("Happy, Tweet No " + num);
				console.log('--------------------');
		

				feel += "happy";
				reaction(feel);
				break;
		case 3:
				console.log("Disgust, Tweet No " + num);
				console.log('--------------------');

			
				feel += "disgust";
				reaction(feel);
				break;
		case 4:
				console.log("Trust, Tweet No " + num);
				console.log('--------------------');

			
				feel += "trust";
				reaction(feel);
				break;
		case 5:
				console.log("Surprise, Tweet No " + num);
				console.log('--------------------');

			
				feel += "surprise";
				reaction(feel);
				break;
		case 6:
				console.log("Anticipation, Tweet No " + num);
				console.log('--------------------');

			
				feel += "anticipation";
				reaction(feel);
				break;
		case 7:
				console.log("Fear, Tweet No " + num);
				console.log('--------------------');

			
				feel += "fear";
				reaction(feel);
				break;
		case 8:
				console.log("Angry, Tweet No " + num);
				console.log('--------------------');
				
				feel += "angry";
				reaction(feel);
				break;

	}
}


randCategory();
setInterval(randCategory, 1000 * 60 * 10);