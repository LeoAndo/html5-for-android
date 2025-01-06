var canvasObj = document.getElementById("myCanvas");
var context = canvasObj.getContext("2d");
context.fillStyle = "red";	// 赤色
context.beginPath();
context.arc(120, 200, 60, 0, Math.PI*2, true);
context.closePath();
context.arc(180, 200, 60, 0, Math.PI*2, false);
context.closePath();
context.fill();
