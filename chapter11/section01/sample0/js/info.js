onmessage = function(evt){
	var text = "";
	for(var i in navigator){
		text += i+"<br>";
	}
	text += "<hr>";
	for(var i in location){
		text += i+"<br>";
	}
	text += "<hr>";
	for(var i in self){
		text += i+"<br>";
	}
	postMessage(text);
}
