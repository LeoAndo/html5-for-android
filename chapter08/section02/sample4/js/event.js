$(function(){
	window.addEventListener("devicemotion", function(evt){
		var x = evt.accelerationIncludingGravity.x;	// 横方向の傾斜
		var y = evt.accelerationIncludingGravity.y;	// 縦方向の傾斜
		var z = evt.accelerationIncludingGravity.z;	// 上下方向の傾斜
		$("#result").html("x:"+x+"<br>y:"+y+"<br>z:"+z);
	}, false);
});
