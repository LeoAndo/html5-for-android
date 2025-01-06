$(function(){
	if (!window.Worker){
		$("output").text("Web Workerには対応していません");
		return;
	}
	// Canvas情報を読み出す
	var canvasObj = document.getElementById("myCanvas");
	var context = canvasObj.getContext("2d");
	var canvasW = canvasObj.width;	// Canvasの横幅（ピクセル数）
	var canvasH = canvasObj.height;	// Canvasの縦幅（ピクセル数）
	// ワーカーを作成
	var wk = new Worker("js/effect.js");
	// ワーカー側の処理が完了した時の処理を設定
	wk.onmessage = function(evt){
		var outputImage = context.createImageData(canvasW, canvasH);
		for(var i=0; i<evt.data.pixelData.length; i++){	// 加工したピクセルをコピー
			outputImage.data[i] = evt.data.pixelData[i];
		}
		context.putImageData(outputImage, 0, 0);	// Canvasに描画
	}
	// ボタンにクリックイベントを割り当て
	$("#startFx").click(function(){
		var image = context.getImageData(0, 0, canvasW, canvasH);
		for(var p=0, pixels=[ ]; p<image.data.length; p++){
			pixels[p] = image.data[p];
		}
		wk.postMessage({
			count : 30000,	// 加えるノイズの数
			width: canvasW,	// 画像の横幅
			height: canvasH,	// 画像の縦幅
			pixelData: pixels	// 加工するピクセルデータの配列
		});
	});
	// カメラで撮影した画像をCanvasに描画
	$("input:file").bind("change", function(){
		var reader = new FileReader();
		reader.onload = function(evt){
			var imgObj = new Image();
			imgObj.src = reader.result;
			imgObj.onload = function(){
				context.drawImage(this,0,0, canvasW, canvasH);
			}
		}
		reader.readAsDataURL(this.files[0]);
	});
});
