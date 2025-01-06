$(function(){
	if (!window.Worker){
		$("output").text("Web Workerには対応していません");
		return;
	}
	var wk = new Worker("js/calc.js");
	wk.onmessage = function(evt){
		$("output").text("計算結果は"+evt.data+"です");
	}
	wk.postMessage(20000*20000);
});
