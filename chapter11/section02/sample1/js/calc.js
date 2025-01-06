onmessage=function(evt){
	var n = evt.data;
	for(var i=1,total=0; i<n; i++){
		total = total + i;
	}
	postMessage(total);
}
