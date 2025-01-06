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
		// ローカルストレージから読み出し
		var oldTime = localStorage[param[i]];
		if (!oldTime){	// 未保存の場合
			oldTime = "未計測";
		}
		if (time - startTime >= 0){
			var timeData = (time - startTime)+" msec";
		}else{
			var timeData = "計測不可";
		}
		// 計測時間を保存
		localStorage[param[i]] = timeData;
		text += param[i]+" : "+timeData+"／"+oldTime+"<br>";
	}
	$("#result").html(text);
});
