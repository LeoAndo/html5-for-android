var m = {
	audioObj : new Audio("music/sound.mp3"),
	timerID : null,
	play: function(startTime){
		try{
			this.audioObj.currentTime = startTime;
			this.audioObj.play();
			clearTimeout(this.timerID);
			this.timerID = setTimeout("m.audioObj.pause()", 1800);
		}catch(e){
			this.audioObj.play();
			clearTimeout(this.timerID);
			this.timerID = setTimeout("m.audioObj.pause()", 1800);
		}
	}
}
$(function(){
	$("button").bind("tap", function(evt){
		m.play(parseInt(evt.target.value));
	});
});
