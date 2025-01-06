$(function(){
	if (localStorage["logo"]){
		$("#logo").attr("src", localStorage["logo"]);
		$("#result").text("ローカルストレージから読み出しました");
	}else{
		$("#logo").attr("src", "images/logo.png");
		$("#logo").bind("load", function(){
			$("#result").text("読み込み完了");
			var myCanvas = document.createElement("canvas");
			myCanvas.width = 280;
			myCanvas.height = 32;
			var context = myCanvas.getContext("2d");
			var img = document.getElementById("logo");
			context.drawImage(img, 0, 0);
			var data = myCanvas.toDataURL();
			if (data.length > 100){
				localStorage["logo"] = data;
				$("#result").text("ローカルストレージに画像を保存しました");
			}else{
				localStorage.removeItem("logo"); 
			}
		});
	}
});
