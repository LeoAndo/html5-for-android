$(function(){
	$("#maincontents").bind("swipeleft", function(){
		$("#result").text("左にスワイプしました");
	});
	$("#maincontents").bind("swiperight", function(){
		$("#result").text("右にスワイプしました");
	});
});
