var Twit = require('twit');
var config = require('../config');
var T = new Twit(config);

var stream = T.stream('user');

stream.on('follow', streaming);

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


function streaming(event) {

  var id = event.source.id;
  var screen_name = event.source.screen_name;


  var user = [];
  user.push(screen_name);

  var x = Math.floor((Math.random() * 1000) + 1);

	  if(user.indexOf(screen_name) < -1){
	  	start();
	  }else{
	  	follow(id, screen_name);
	  	  if(user.length > 20){
		  	user.shift();
		  }
	  }
};

function follow(id, sender){
	var params = {
		user_id: id,
		screen_name: sender,
		text: 'Thanks '+ sender + ' for following me.',
	}

	T.post('direct_messages/new', params, call);

	var sec = Math.floor((Math.random() * 60) + 1);

  	var min = Math.floor(Math.random() * (15 - 3 + 1)) + 3;



	function call(err, data, response){
		if(!err){
			wait(1000 * sec * min);
			console.log("Sent Direct Message to "+ sender);
		}else{
			console.log(err);
		}
	}
}