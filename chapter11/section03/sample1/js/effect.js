onmessage = function(evt){
	var count = evt.data.count;
	var canvasW = evt.data.width;
	var canvasH = evt.data.height;
	var pixels = evt.data.pixelData;
	// ノイズを加える
	for(var i=0; i<count; i++){
		var x = Math.floor(Math.random()*canvasW);
		var y = Math.floor(Math.random()*canvasH);
		var pointer = (y * canvasW + x ) * 4;	// RGBαなので4つの配列要素
		pixels[pointer+0] = 0;	// 赤のピクセルデータの輝度を0にする
		pixels[pointer+1] = 255;	// 緑のピクセルデータの輝度を255にする
		pixels[pointer+2] = 0;	// 青のピクセルデータの輝度を0にする
	}
	postMessage({
		pixelData : pixels
	});
}
