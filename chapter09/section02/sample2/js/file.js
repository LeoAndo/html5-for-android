$(function(){
	$("#selectFile").bind("change", function(){
		var reader = new FileReader();
		reader.onload = function(evt){
			var data = evt.target.result.substr(5, 9999999);
			var a = "data:"+mimetype+";" + data;
			document.getElementById("myImage").src = a;
		}
		reader.readAsDataURL(this.files[0]);
		var filename = this.files[0].name;
		var mimetype = "image/jpeg";	// デフォルトでJPEGにしておく
		if (filename.indexOf("jpg") > -1) { mimetype = "image/jpeg"; }
		if (filename.indexOf("png") > -1) { mimetype = "image/png"; }
	});
});
