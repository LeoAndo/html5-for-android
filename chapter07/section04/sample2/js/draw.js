window.onload = function(){
	var canvasObj = document.getElementById("myCanvas");
	var context = canvasObj.getContext("2d");
	var imageObj = document.getElementById("photo");
	context.drawImage(imageObj, 0, 0);	// (0,0)に描画
}
