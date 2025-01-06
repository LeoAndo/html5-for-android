$(function(){
	var text = ["クリックかURL入力", "再読み込み", "ヒストリーを利用"];
	var type = performance.navigation.type;
	$("output").text(text[type]);
});
