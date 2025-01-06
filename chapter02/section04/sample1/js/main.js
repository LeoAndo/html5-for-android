$("#home").live("pagebeforecreate", function(){
	$.getJSON("eclipse.txt", function(jsonData){
		// 日食のリスト
		for(var i=0; i<jsonData.sun.length; i++){
			$("#sun").append("<li>"+jsonData.sun[i]+"</li>");
		}
		// 月食のリスト
		for(var i=0; i<jsonData.moon.length; i++){
			$("#moon").append("<li>"+jsonData.moon[i]+"</li>");
		}
		$("#sun,#moon").listview("refresh");	// refreshが必要
	});
});
