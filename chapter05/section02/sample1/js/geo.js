$(function(){
	var map = new google.maps.Map(
		document.getElementById("gmap"),{
			zoom : 8,
			center : new google.maps.LatLng(35.328080915397635, 138.72854948043823),
			mapTypeId : google.maps.MapTypeId.ROADMAP
		}
	);
});
