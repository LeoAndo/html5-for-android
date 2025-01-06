$(function(){
	// ワーカーを作成
	var wk = new Worker("js/info.js");
	// ワーカー側の処理が完了した時の処理を設定
	wk.onmessage = function(evt){
		$("output").html(evt.data);
		console.log(evt.data);
	}
	wk.postMessage(null);
});
