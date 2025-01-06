window.addEventListener("touchstart", function(evt){
	// パレット
	var palette = ["blue", "red", "purple", "green", "cyan", "yellow"];
	var baseX = $("#myCanvas").position().left;
	var baseY = $("#myCanvas").position().top;
	var x = evt.touches[0].pageX;	// タッチしたX座標
	var y = evt.touches[0].pageY;	// タッチしたY座標
	// Canvasに描画
	var canvasObj = document.getElementById("myCanvas");
	var context = canvasObj.getContext("2d");
	var n = Math.floor(Math.random() * palette.length);
	context.fillStyle = palette[n];	// ランダムな色にする
	context.beginPath();
	context.arc(x-baseX, y-baseY, 30, 0, 2*Math.PI, true);	// 半径30pxの円を描画
	context.fill();
}, false);
setInterval(function(){
	var canvasObj = document.getElementById("myCanvas");
	var context = canvasObj.getContext("2d");
	context.fillStyle = "rgba(255, 255, 255, 0.125)";	// 半透明の白色にする
	context.fillRect(0, 0, canvasObj.width, canvasObj.height);
}, 100);
