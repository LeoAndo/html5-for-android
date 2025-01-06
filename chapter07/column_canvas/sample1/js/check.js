var canvasObj = document.getElementById("myCanvas");
context = canvasObj.getContext("2d");
text = "";
for(i in context){
	text += i+", ";
}
document.getElementById("result").value = text;