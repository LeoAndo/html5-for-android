var canvasObj = document.getElementById("myCanvas");
context = canvasObj.getContext("2d");
context.fillStyle = "red";
context.shadowBlur = 5;
context.shadowOffsetX = 4;
context.shadowOffsetY = 8;
context.shadowColor = "orange";
context.font = "32px Times";
context.fillText("Android", 10, 60);
