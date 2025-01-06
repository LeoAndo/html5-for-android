$("#home").live("pagecreate", function(){
	if (localStorage.length == 0){ return; }
	var text = "";
	for(var i=0; i<localStorage.length; i++){
		var key = localStorage.key(i);
		var value = localStorage[key];
		text += "<li id='ls_"+key+"'><a>"+key+"</a>";
		text += "<span class='ui-li-count'>"+value.length+"</span>";
		text += "<a href='javascript:del(\""+key+"\")' data-icon='delete'>削除</a>";
		text += "<ul><li>"+value+"</li></ul></li>";
	}
	$("#keyList").append(text);
});
function del(key){
	$.data($("#dialog").get(0), "keyname", key);
	$.mobile.changePage("#dialog");
}
// ダイアログ処理を設定
$("#dialog").live("pagecreate", function(){
	$("#yes").live("click", function(){
		var key = $.data($("#dialog").get(0), "keyname");
		localStorage.removeItem(key);
		$(".ui-dialog").dialog("close");
		$("#ls_"+key).remove();
	});
	$("#no").live("click", function(){
		$(".ui-dialog").dialog("close");
	});
});
