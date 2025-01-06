$(function(){
	var n = 0;
	$("#myVideo").bind("ended", function(){
		alert("ENDイベント発生。timeupdateイベントの発生回数："+n);
		$.mobile.changePage("#menuPage", {
			transition: "slide",
			reverse: true
		});
	});
	$("#myVideo").bind("timeupdate", function(){
		n++;
		$("#result").text(n);
	});
});