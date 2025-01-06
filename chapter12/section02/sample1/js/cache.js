$(document).bind("pageshow", function(){
	var flag = navigator.onLine;
	if (flag === true){
		$("#stat").text("オンラインです");
	}else{
		$("#stat").text("オフラインのため通信できません");
	}
});
