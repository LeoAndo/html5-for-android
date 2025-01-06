$(function(){
	// ローカルストレージから前回のアクセス時間を読み出す
	var timedata = localStorage.getItem("accessTime");
	if (timedata == null){
		$("div:first").text("初めてのアクセスです");
	}else{
		$("div:first").text(timedata);
	}
	// ローカルストレージに現在の時間を保存する
	var dateObj = new Date();
	var y = dateObj.getFullYear();
	var m = dateObj.getMonth() + 1;
	var d = dateObj.getDate();
	var h = dateObj.getHours();
	var min = dateObj.getMinutes();
	var s = dateObj.getSeconds();
	localStorage.setItem("accessTime", y+"年"+m+"月"+d+"日 "+h+"時"+min+"分"+s+"秒");
});
