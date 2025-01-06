$(function(){
	$("#maincontents").bind("taphold", function(){
		$("#result").text("ホールドしました。"+(new Date()));
	});
	$("#maincontents").bind("touchend", function(){
		$("#result").text("");
	});
});
