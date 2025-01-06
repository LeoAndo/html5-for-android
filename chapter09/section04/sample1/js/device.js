$(function(){
	$("input:file").bind("change", function(){
		var canvasObj = document.getElementById("myCanvas");
		var context = canvasObj.getContext("2d");
		var canvasW = canvasObj.width;	// Canvasの横幅（ピクセル数）
		var canvasH = canvasObj.height;	// Canvasの縦幅（ピクセル数）
		var reader = new FileReader();
		// Canvasにカメラで撮影した画像を描画
		reader.onload = function(evt){
			var imgObj = new Image();
			imgObj.src = reader.result;	// 撮影した画像データをImageオブジェクトへ
			imgObj.onload = function(){	// 画像が完全に処理されたらCanvasに画像とフレームを描画
				context.drawImage(this,0,0, canvasObj.width, canvasObj.height);
				var n = $("input:checked").val();	// チェックされたフレームのvalue値を読み出す
				context.drawImage(colorFrame[n], 0,0, canvasObj.width, canvasObj.height);
			}
		}
		reader.readAsDataURL(this.files[0]);
	});
	// フレーム画像のURL（パス）
	var frameList = ["images/frame1.png", "images/frame2.png", "images/frame3.png"];
	var colorFrame = [ ];	// フレーム画像を入れる配列
	for(var i=0; i<frameList.length; i++){
		colorFrame[i] = new Image();
		colorFrame[i].src = frameList[i];
	}
});
