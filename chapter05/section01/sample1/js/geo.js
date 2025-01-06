$(function(){
	navigator.geolocation.watchPosition(
		// 位置情報の取得に成功した時の処理
		function(position){
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			var alt = position.coords.altitude;
			var time = position.timestamp;
			var dateObj = new Date(time);
			var h = dateObj.getHours();
			var m = dateObj.getMinutes();
			var s = dateObj.getSeconds();
			var t = h+"時"+m+"分"+s+"秒";
			var txt = "緯度："+lat+"<br>経度："+lon+"<br>高度："+alt+"<br>時間："+t;
			$("#geoData").html(txt);
		},
		// 位置情報の取得に失敗した場合の処理
		function(error){
			$("#geoData").text("エラー："+error.code);
		},
		// 位置情報取得オプション
		{
			enableHighAccuracy : true,
			maximumAge : 10*1000,
			timeout : 60*1000
		}
	);
});
