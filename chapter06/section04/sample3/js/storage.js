$("#home").live("pagecreate", function(){
	if (localStorage.length == 0){ return; }
	var text = "";
	for(var i=0; i<localStorage.length; i++){
		var key = localStorage.key(i);
		var value = localStorage[key];
		text += "<li><a>"+key+"</a>";
		text += "<a href='javascript:del(\""+key+"\")' data-icon='delete'>削除</a>";
		text += "<ul><li>"+value+"</li></ul></li>";
	}
	$("#keyList").append(text);
});
function del(key){
	var flag = confirm(key+"を削除しますか？");
	if (!flag){ return; }
	localStorage.removeItem(key);
	location.reload();
}