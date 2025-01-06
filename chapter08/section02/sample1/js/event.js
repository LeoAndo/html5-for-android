window.addEventListener("touchstart", function(evt){
	var txt="";
	var n = evt.touches.length;
	for(var j=0; j<n; j++){
		var px = evt.touches[j].pageX;
		var py = evt.touches[j].pageY;
		for(var i in evt.touches[j]){ txt += i+" : "+evt.touches[j][i]+"<br>"; }
		txt += "<hr>";
	}
	$("#result").html("同時タッチ数 : "+n+"<hr>"+txt);
}, false);
