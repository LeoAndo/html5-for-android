var canvasObj = document.getElementById("myCanvas");
var context = canvasObj.getContext("2d");
context.strokeStyle = "red";	// 赤色
context.lineWidth = 4;
context.beginPath();
context.moveTo(10, 350);
context.lineTo(150, 10);
context.lineTo(290, 350);
context.closePath();
context.stroke();

