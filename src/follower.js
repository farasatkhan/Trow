var Twit = require('twit');
var config = require('../config');
var T = Twit(config); 

var stream = T.stream('user');

var number = 1;

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


stream.on('follow', follower);


function follower(event) {

  var screen_name = event.source.screen_name;

  var user = [];
  user.push(screen_name);

  var x = Math.floor((Math.random() * 1000) + 1);

	  if(user.indexOf(screen_name) < -1){
	  	start();
	  }else{
	  	follow('@'+ screen_name + ' Thanks for follow. Here is a random number for you: '+ x);
	  	  if(user.length > 20){
		  	user.shift();
		  }
	  }
};


function follow(txt){
	T.post('statuses/update', {status: txt}, call);

	function call(err, data, response){
		if(!err){

			console.log('Replied successfully');
			stream.stop();
			start();
		}else{
			console.log(err);
		}
	}
}

function start(){
	wait(1000 * 60 * 2);
	console.log('Wait for 2 minute!');
	stream.start();
}