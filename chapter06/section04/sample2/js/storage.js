$("#home").live("pagecreate", function(){
	if (localStorage.length == 0){ return; }
	var text = "";
	for(var i=0; i<localStorage.length; i++){
		var key = localStorage.key(i);
		var value = localStorage[key];
		text += "<li>"+key+"<ul><li>"+value+"</li></ul></li>";
	}
	$("#keyList").append(text);
});
