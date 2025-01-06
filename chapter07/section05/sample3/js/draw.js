var canvasObj = document.getElementById("myCanvas");
var context = canvasObj.getContext("2d");
var imageObj = new Image();
imageObj.src = "images/waterfall.jpg";	// 画像のURL
imageObj.onload = function(){
	context.save();
	context.translate(75, 100);
	context.rotate(45 * Math.PI / 180);
	context.drawImage(imageObj, -75, -100);
	context.restore();
	context.drawImage(imageObj, 150, 200);
}
