var canvasObj = document.getElementById("myCanvas");
var context = canvasObj.getContext("2d");
context.fillStyle = "red";	// 赤色
context.beginPath();
context.moveTo(10, 350);	// 上向きの三角のパスを作成
context.lineTo(150, 10);	// 時計回りにパスを作成
context.lineTo(290, 350);
context.closePath();	// パスを閉じる（重要）
context.moveTo(70, 350);	// 位置を少し右にして上向きの三角のパスを作成
context.lineTo(350, 350);	// 反時計回りにパスを作成
context.lineTo(210, 10);
context.closePath();
context.fill();
