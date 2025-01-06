$("#home").live("pagecreate", function(){
	if (localStorage.length == 0){ return; }
	var text = "";
	for(var i=0; i<localStorage.length; i++){
		text += "<li>"+localStorage.key(i)+"</li>";
	}
	$("#keyList").append(text);
});
