$(function(){
	var g = -90;	// 調整値
	var canvasObj = document.getElementById("spiritLevel");
	var context = canvasObj.getContext("2d");
	var cx = canvasObj.width / 2;	// Canvasの中心X座標を算出
	var cy = canvasObj.height / 2;	// Canvasの中心Y座標を算出
	window.addEventListener("deviceorientation", function(evt){
		var x = evt.gamma;	// 横方向の回転角度
		var y = evt.beta;	// 縦方向の回転角度
		x = x / g;	// 約-1.0〜1.0に収まるように補正
		y = y / g;	// 約-1.0〜1.0に収まるように補正
		x = cx + x * canvasObj.width;
		y = cy + y * canvasObj.height;
		// Canvasに描画
		context.clearRect(0, 0, canvasObj.width, canvasObj.height);
		context.fillStyle = "red";	// 赤色にする
		context.beginPath();
		context.arc(x, y, 4, 0, 2*Math.PI, true);	// 半径4pxの円を描画
		context.fill();
	}, false);
});
