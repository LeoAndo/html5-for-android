$(function(){
	var audioObj = document.getElementsByTagName("video")[0];
	$("#audioPlay").bind("tap", function(){
		audioObj.play();
	});
	$("#audioStop").bind("tap", function(){
		audioObj.pause();
	});
	$("#audioRewind").bind("tap", function(){
		audioObj.currentTime = 0;
	});
});
