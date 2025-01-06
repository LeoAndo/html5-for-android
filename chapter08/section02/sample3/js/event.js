$(function(){
	$("#content").bind("touchstart", function(evt){
		var n = evt.originalEvent.touches.length;
		$("#result").text("タッチしました。同時タッチ数："+n);
	});
});
