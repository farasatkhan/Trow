var Twit = require('twit');
var config = require('../config');
var T = new Twit(config);

// Sent message to most recent user on message list
T.get('direct_messages', {count: 10}, response);

function response(err, data, response){
	if(!err){
		var id = data[0].id;
		var sender = data[0].sender_screen_name;

		var params = {
			user_id: id,
			screen_name: sender,
			text: 'Thanks for your message with',
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