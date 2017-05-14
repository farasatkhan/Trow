var Twit = require('twit');
var config = require('../config');
var T = new Twit(config);
var fs = require('fs');

const readline = require('readline');

const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});



 read.question('What is the name of the file you want to upload? e.g, img.jpg   ', 
	(path)=>{

			read.question('Write your tweet about the img   ', (status)=>{save(path, status)});

	});


function save(location, tweet){
	var path = '../media/'+location;
	var exist = fs.existsSync(path);

	if(exist == true){
		var b64 = fs.readFileSync(path, { encoding: 'base64' });

		T.post('media/upload', { media_data: b64 }, text);


		function text(err, data, response) {


		  var mediaIdStr = data.media_id_string;
		  var altText = tweet;
		  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

		  T.post('media/metadata/create', meta_params, callback);

			function callback(err, data, response) {
			    if (!err) {

			      var params = { 
			      	status: tweet, 
			      	media_ids: [mediaIdStr],
			      }

			      T.post('statuses/update', params, call);

			      function call(err, data, response){

			      	if(!err){

			      		console.log('Tweeted successully');
			      		process.exit(0);
			      	}else{

			      		console.log('There is some issue in doing it, Try again');
			      		process.exit(1);
			      	}
			      }
			    }
			}
		}
	}else{
		console.log("Sorry that path doesn't exist.");
		process.exit(1);
	}
}