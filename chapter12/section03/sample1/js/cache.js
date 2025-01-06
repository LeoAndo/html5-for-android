$(document).bind("pageshow", function(){
	$("#updateCache").click(function(){
		var acObj = window.applicationCache;
		// イベントハンドラを設定
		acObj.onchecking = function(){
			$("#stat").html($("#stat").html()+"<br>チェック中");
		}
		acObj.onerror = function(){
			$("#stat").html($("#stat").html()+"<br>エラー発生");
		}
		acObj.onnoupdate = function(){
			$("#stat").html($("#stat").html()+"<br>アップデートなし");
		}
		acObj.ondownloading = function(){
			$("#stat").html($("#stat").html()+"<br>ダウンロード開始");
		}
		acObj.onprogress = function(){
			$("#stat").html($("#stat").html()+"<br>ダウンロード中");
		}
		acObj.onupdateready = function(){
			$("#stat").html($("#stat").html()+"<br>ダウンロード完了");
		}
		acObj.oncached = function(){
			$("#stat").html($("#stat").html()+"<br>キャッシュ完了");
		}
		acObj.onobsolete = function(){
			$("#stat").html($("#stat").html()+"<br>マニフェストファイルにアクセス不能");
		}
		$("#stat").html($("#stat").html()+"<hr>");	// 区切りを示すために出力
		acObj.update();	// アップデート開始
	});
});
