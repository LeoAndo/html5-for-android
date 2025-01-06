$(function(){
	if (navigator.getUserMedia){
		navigator.getUserMedia("video", 
			function(stream) { 
				document.getElementById("myVideo").src = stream;
			} ,function(){ alert("Error!!"); }
		);
	}
});