var canvasObj = document.getElementById("myCanvas");
var context = canvasObj.getContext("2d");
setInterval(function(){
	var videoObj = document.getElementById("myVideo");
	context.drawImage(videoObj, 0, 0);
}, 1000);
