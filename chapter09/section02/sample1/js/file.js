$(function(){
	$("#selectFile").bind("change", function(){
		var reader = new FileReader();
		reader.onload = function(evt){
			var bin = [ ];
			for(var i=0; i<8; i++){
				var byte = evt.target.result.charCodeAt(i);	// 1バイト読み出し
				var n = ("0"+byte.toString(16)).slice(-2);	// 2桁にする
				bin.push("0x"+n);
			}
			$("output").text(bin.toString());
		}
		reader.readAsBinaryString(this.files[0]);
	});
});
