$(function(){
	// 位置情報を表示するページの処理
	$("#position").bind("pageshow", function(evt){
		getPos();
	});
	// 位置情報を取得する処理
	function getPos(){
		navigator.geolocation.watchPosition(
			// 位置情報の取得に成功した時の処理
			function(position){
				var lat = position.coords.latitude;
				var lon = position.coords.longitude;
				var alt = position.coords.altitude;
				var txt = "緯度："+lat+"<br>経度："+lon+"<br>高度："+alt;
				$("#geoData").html(txt);
				setMarker(lat, lon);	// 地図に現在地を表示
			},
			// 位置情報の取得に失敗した場合の処理
			function(error){
				$("#geoData").text("エラー："+error.code);
			},
			// 位置情報取得オプション
			{
				enableHighAccuracy : true,
				maximumAge : 5*1000,
				timeout : 60*1000
			}
		);
	}
	// 地図を表示するページの処理
	var YahooMap, marker;
	$("#map").bind("pageshow", function(evt){
		// 地図を表示
		YahooMap = new Y.Map("ymap");
		YahooMap.drawMap(
				//new Y.LatLng(35.3, 138.5),	// 表示する緯度経度
				new Y.LatLng(0,0),	// 表示する緯度経度
				8,	// ズームレベル
				Y.LayerSetId.NORMAL	// 地図の種類
		);
		// マーカーを表示
		marker = new Y.Marker(
			new Y.LatLng(0, 0)
		);
		YahooMap.addFeature(marker);
		// コントロールを表示(水平タイプ)
		var control = new Y.SliderZoomControlVertical();
		YahooMap.addControl(control);
		// 現在地を取得する関数を呼び出す
		getPos();
	});
	// 地図上に現在地を表示
	function setMarker(lat, lon){
		var pos = new Y.LatLng(lat, lon);	// 現在位置
		marker.setLatLng(pos);
		YahooMap.panTo(pos);
	}
	// 地図の縦幅を設定
	$("#ymap").css("height", $(document).height()-180+"px");
});
