$(function(){
	$("#movie").bind("pageshow", function(){
		document.getElementsByTagName("video")[0].play();
	});
	$("#movie").bind("pagebeforehide", function(){
		document.getElementsByTagName("video")[0].pause();
	});
});