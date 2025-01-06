var canvasObj = document.getElementById("myCanvas");
var context = canvasObj.getContext("2d");
context.shadowBlur = 5;
context.shadowColor = "blue";
context.fillStyle = "yellow";
context.strokeStyle = "red";
context.font = "italic bold 64px Times"
context.fillText("Android", 20, 100);
context.clearShadow();
context.strokeText("Android", 20, 100);
