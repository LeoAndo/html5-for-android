var canvasObj = document.getElementById("myCanvas");
var context = canvasObj.getContext("2d");
var imageObj = new Image();
imageObj.src = "images/waterfall.jpg";	// 画像のURL
imageObj.onload = function(){
	context.drawImage(imageObj, 0, 0);	// (0,0)に描画
}
