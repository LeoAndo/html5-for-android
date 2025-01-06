$(function(){
	var ele = document.getElementById("stat");
	var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
	if (!battery){
		ele.innerHTML = "未対応です";
	}else{
		ele.innerHTML = "充電レベル："+(battery.level * 100) + "%";
	}
});