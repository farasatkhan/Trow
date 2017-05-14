var Twit = require('twit');
var config = require('../config');
var T = new Twit(config);

const readline = require('readline');

const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

read.question('Write your message to sent?   ', (msg)=>{ read.question('Write the number of users to sent in the inbox? Max 50   ', (count)=>{box(msg, count)})})

// Sent message to most recent user on message list
function(message, users){
	T.get('direct_messages', {count: users}, response);

	function response(err, data, response){
		if(!err){
			var id = data[0].id;
			var sender = data[0].sender_screen_name;

			var params = {
				user_id: id,
				screen_name: sender,
				text: message,
			}

			T.post('direct_messages/new', params, call);

			function call(err, data, response){
				if(!err){
					console.log("Sent Direct Message to "+ sender);
				}else{
					console.log(err);
				}
			}

		}else{
			console.log(err);
		}
	}
}