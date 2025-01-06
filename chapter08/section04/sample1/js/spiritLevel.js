$(function(){
	var g = 9.80665;	// 重力加速度。Firefoxの場合は1.0に。
	var canvasObj = document.getElementById("spiritLevel");
	var context = canvasObj.getContext("2d");
	var cx = canvasObj.width / 2;	// Canvasの中心X座標を算出
	var cy = canvasObj.height / 2;	// Canvasの中心Y座標を算出
	window.addEventListener("devicemotion", function(evt){
		var x = evt.accelerationIncludingGravity.x;	// 横方向の傾斜
		var y = evt.accelerationIncludingGravity.y;	// 縦方向の傾斜
		x = x / g;	// 約-1.0〜1.0に収まるように補正
		y = y / g;	// 約-1.0〜1.0に収まるように補正
		x = cx + x * canvasObj.width;	// Firefox の場合は * -1 を追加
		y = cy + y * canvasObj.height * -1;
		// Canvasに描画
		context.clearRect(0, 0, canvasObj.width, canvasObj.height);
		context.fillStyle = "red";	// 赤色にする
		context.beginPath();
		context.arc(x, y, 4, 0, 2*Math.PI, true);	// 半径4pxの円を描画
		context.fill();
	}, false);
});
