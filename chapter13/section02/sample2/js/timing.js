$(function(){
	var text = ["クリックかURL入力", "再読み込み", "ヒストリーを利用"];
	var type = performance.navigation.type;
	$("#nvtype").text(text[type]);
	// 計測結果を読み出し表示
	var now = new Date();
	var param = [
			"navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart",
			"redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd",
			"connectStart", "connectEnd", "secureConnectionStart", "requestStart",
			"responseStart", "responseEnd", "domLoading", "domInteractive",
			"domContentLoadedEventStart", "domContentLoadedEventEnd",
			"domComplete", "loadEventStart", "loadEventEnd"
	];
	var startTime = performance.timing.navigationStart;	// 読み込み開始時間
	var text = "";
	for(var i=0; i<param.length; i++){
		var time = performance.timing[param[i]];
		if (time === undefined){ continue; }	// 未定義の場合
		if (time - startTime >= 0){
			text += param[i]+" : "+(time - startTime)+" msec<br>";
		}else{
			text += param[i]+" : 計測不可<br>";
		}
	}
	$("#result").html(text);
});
