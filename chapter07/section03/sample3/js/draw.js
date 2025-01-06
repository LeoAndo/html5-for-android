var canvasObj = document.getElementById("myCanvas");
var context = canvasObj.getContext("2d");
context.strokeStyle = "red";	// 赤色
context.lineWidth = 20;
context.beginPath();
context.arc(120, 200, 80, 0, Math.PI, true);
context.lineTo(120, 300);
context.lineTo(200, 200);
context.closePath();
context.stroke();
