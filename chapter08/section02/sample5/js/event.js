window.addEventListener("deviceorientation", function(evt){
	var x = event.beta;	// 横方向の回転
	var y = event.gamma;	// 縦方向の回転
	var z = event.alpha;	// 上下方向の回転
	$("#result").html("α:"+x+"<br>β:"+y+"<br>γ:"+z);
});
