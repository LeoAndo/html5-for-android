$(function(){
	var audioObj = document.getElementsByTagName("audio")[0];
	$("#audioPlay").bind("tap", function(){
		audioObj.play();
	});
	$("#audioStop").bind("tap", function(){
		audioObj.pause();
	});
	$("#audioRewind").bind("tap", function(){
		audioObj.currentTime = 0;
	});
	$("#audioSetTime").bind("tap", function(){
		audioObj.currentTime = 3.0;
		audioObj.play();
	});
});
