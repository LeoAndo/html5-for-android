$(function(){
	var text = "";
	for(var i=0; i<localStorage.length; i++){
		var keyName = localStorage.key(i);
		text = text + keyName + " : ";
		text = text + localStorage.getItem(keyName)+"<br>";
	}
	$("output").html(text);
});
