var g = {	// ゲーム関係の情報を入れるグローバルオブジェクト
	canvasW : 0,	// Canvasの横幅
	canvasH : 0,	// Canvasの縦幅
	stoneImg : new Image(),	// 隕石の画像オブジェクト
	stoneSize : 32,	// 隕石の幅
	context : null,	// Canvasの2Dコンテキスト
	timerID : null,	// タイマー変数
	flag : false,	// タップしたかどうかのフラグ。true=タップした
	tapx : 0,	// タップしたX座標
	tapy : 0,	// タップしたY座標
	ix : 0,	// 隕石のX座標
	iy : 0,	// 隕石のY座標
	dy : 0,	// 隕石の移動量（落下量）
	bx : 0,	// 爆風のX座標
	by : 0,	// 爆風のY座標
	bCounter : 1000,	// 爆風のカウンタ変数
	score : 0,	// スコア
	rad : 0	// 隕石の回転角度（ラジアン）
};
$(function(){
	// Canvas関係の読み込みとイベント、タイマー設定
	var canvasObj = document.getElementById("myCanvas");
	g.canvasW = canvasObj.width;
	g.canvasH = canvasObj.height;
	g.context = canvasObj.getContext("2d");
	g.stoneImg.src = "images/stone.png";
	g.stoneImg.onload = function(){	// 隕石の画像データを読み込み完了後にゲーム開始
		g.ix = Math.random() * 200 + 50;	// 隕石の出現範囲
		g.iy = -g.stoneSize;
		g.dy = Math.random() * 5 + 2;
		g.timerID = setInterval("moveStone()", 100);
	}
	canvasObj.addEventListener("touchstart", startBeam, false);
});
// タップしたらビームを発射
function startBeam(evt){
	// タップされた座標を求める
	g.tapx = evt.touches[0].pageX;
	g.tapy = evt.touches[0].pageY;
	g.flag = true;
	// 判定。2点間の距離で判定する
	var absx = Math.abs(g.tapx - g.ix);
	var absy = Math.abs(g.tapy - g.iy);
	var d = Math.sqrt(Math.pow(absx, 2) + Math.pow(absy, 2));
	if (d > 50){ return; }	// 50pxより大きい場合は何もしない
	g.score = g.score + Math.floor(g.iy);
	g.bx = g.tapx;	// 爆風の座標を設定
	g.by = g.tapy;
	g.bCounter = 0;
	g.ix = Math.random() * 200+50;
	g.iy = -g.stoneSize;
	g.dy = Math.random() * 5 + 2 + g.score/1000;	// 落下速度を計算
}
// 隕石移動＆描画
function moveStone(){
	g.context.clearRect(0,0, g.canvasW, g.canvasH);	// Canvas内容を消去
	g.iy = g.iy + g.dy;	// 隕石を移動（落下）
	g.context.save();	// コンテキストを保存しておく
	var centerX = g.ix + g.stoneSize/2;
	var centerY = g.iy + g.stoneSize/2;
	g.context.translate(centerX, centerY);	// 隕石の中心に移動
	g.context.rotate(g.rad);	// 回転させる
	g.context.translate(-centerX, -centerY);	// 元に戻す
	g.rad = g.rad + Math.PI / 9;
	g.context.drawImage(g.stoneImg, g.ix, g.iy);
	g.context.restore();	// 保存したコンテキストを元に戻す
	// 隕石が完全に落下したか調べる
	if (g.iy > g.canvasH){
		clearInterval(g.timerID);
		alert("Game Over");	// 隕石が落下したのでゲームオーバー
	}
	// タップされた場合は一度だけレーザービームを描画する
	if (g.flag){
		g.context.lineWidth = 3;
		g.context.strokeStyle = "yellow";
		g.context.beginPath();
		g.context.moveTo(150, 327);
		g.context.lineTo(g.tapx, g.tapy);
		g.context.stroke();
		g.flag = false;
	}
	// 爆風があるなら処理する
	if (g.bCounter < 10){
		g.context.beginPath();
		g.context.fillStyle = "yellow";
		g.context.globalAlpha = 0.7;	// 不透明度を70%にする
		g.context.arc(g.bx, g.by, g.bCounter*10, 0, Math.PI*2, false);	// 円を描く
		g.context.fill();
		g.context.globalAlpha = 1.0;
		g.bCounter = g.bCounter + 1;
	}
	// スコアを表示する
	g.context.font = "normal bold 22px Times";
	g.context.fillStyle = "red";
	g.context.fillText("SCORE "+g.score, 10, 20);
}
