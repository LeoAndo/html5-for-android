$(function(){
	if (!window.webkitRequestFileSystem){
		$("output").text("Filesystem APIには対応していません");
		return;
	}
	$("#save").click(saveFile);
	$("#load").click(loadFile);
	$("#delete").click(deleteFile);
});
// ファイルを保存する関数
function saveFile(){
	window.webkitRequestFileSystem(window.TEMPORARY, 1024*10, function(fs){
		fs.root.getFile("memo.txt", {
			create : true	// 新規作成
		}, function(fileEntry){
			var filename  = "ファイル名："+fileEntry.name;
			var filepath = "ファイルパス："+fileEntry.fullPath;
			$("output").html(filename+"<br>"+filepath);
			// テキストエリアの内容を書き込み
			fileEntry.createWriter(function(fileWriter){
				// イベントハンドラを設定
				fileWriter.onwrite = function(){ alert("保存しました"); }
				fileWriter.onerror = function(e){ $("output").text("書き込めません："+e.code); }
				var blob = new WebKitBlobBuilder();	// Blobオブジェクトを作成
				blob.append($("#myMemo").val());	// テキストエリアの内容を追加
				fileWriter.write(blob.getBlob("text/plain"));	// 書き込み
			});
		}, function(e){
			$("output").text("作成できません："+e.code);
		});
	},function(e){
		$("output").text("エラー："+e.code);
	});
}
// ファイル内容を読み出す関数
function loadFile(){
	window.webkitRequestFileSystem(window.TEMPORARY, 1024*10, function(fs){
		fs.root.getFile("memo.txt", { }, function(fileEntry){
			fileEntry.file(function(file){
				// テキストファイルの内容を読み出し
				var reader = new FileReader();
				// イベントハンドラを設定
				reader.onloadend = function(e){
					$("#myMemo").val(this.result);	// 読み出し結果を出力
				}
				reader.onerror = function(e){ alert("ファイルが読み出せません"); }
				reader.readAsText(file);	// テキストファイルを読み込む
			},function(e){
				$("output").text("データが読み込めません："+e.code);
			});
		}, function(e){
			$("output").text("ファイルが読み込めません："+e.code);
		});
	},function(e){
		$("output").text("エラー："+e.code);
	});
}
// ファイルを削除する関数
function deleteFile(){
	window.webkitRequestFileSystem(window.TEMPORARY, 1024*10, function(fs){
		fs.root.getFile("memo.txt", { }, function(fileEntry){
			fileEntry.remove(function(file){
				$("output").text("削除しました");
			},function(e){
				$("output").text("エラー："+e.code);
			});
		}, function(e){
			$("output").text("ファイルがありません："+e.code);
		});
	},function(e){
		$("output").text("エラー："+e.code);
	});
}
