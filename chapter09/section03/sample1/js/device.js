$(function(){
	$("input:file").bind("change", function(){
		$("output").html(this.files[0].name+"<br>"+this.files[0].size+"バイト");
	});
});
