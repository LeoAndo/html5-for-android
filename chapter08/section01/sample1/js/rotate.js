window.addEventListener("orientationchange", function(){
	var r = window.orientation;
	$("output").text("回転角度："+r);
}, false);
