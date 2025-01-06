$(function(){
	$("#selectFile").bind("change", function(){
		var n = this.files.length;
		var txt = "";
		for(var i in this.files[0]){
			txt += i + " = "+this.files[0][i]+"<br>";
		}
		$("output").html(txt);
	});
});
