■パソコン用のブラウザでも動作させるには
　パソコンの場合、タッチイベントがないため、mousedownイベントに変更します。

canvasObj.addEventListener("mousedown", startBeam, false);	// ★★★イベント名を変更

次にstartBeam()関数内でタッチ座標をマウスのクリック座標から取得するようにします。

// クリックされた座標を求める
g.tapx = evt.pageX;	// ★★★マウスクリック座標のプロパティに変更
g.tapy = evt.pageY;	// ★★★マウスクリック座標のプロパティに変更

この3ヶ所の変更でゲームがパソコンでも遊べるようになります。

