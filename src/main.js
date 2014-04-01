var $ = require('jquery');

var request = $.ajax({
	url: './Claude Debussy - Claire De Lune.mid',
	dataType: 'text',
	type: 'GET'
});

request.done(function(midiFile){
	console.log(midiFile);
});

request.fail(function(jqXHR, textStatus){
	console.log("Request failed: " + textStatus);
});