$(function(){
	YahooMap = new Y.Map("ymap");
	YahooMap.drawMap(
		new Y.LatLng(35.328080915397635, 138.72854948043823),
		8,
		Y.LayerSetId.NORMAL
	);
});
