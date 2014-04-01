var $ = require('jquery'),
	MidiFile = require('./midi-parser.js');


var request = $.ajax({
	url: './Claude Debussy - Claire De Lune.mid',
	dataType: 'text',
	mimeType: 'text/plain; charset=x-user-defined',
	type: 'GET',
	processData: false
});

request.done(function(dataString) {
	var midiData = dataString || "",
		ff = [];

	for (var i = 0; i < midiData.length; i++) {
		ff[i] = String.fromCharCode(midiData.charCodeAt(i) & 255);
	}

	var midiFile = MidiFile(ff.join(""));
	console.log(midiFile);
});

request.fail(function(jqXHR, textStatus){
	console.log("Request failed: " + textStatus);
});