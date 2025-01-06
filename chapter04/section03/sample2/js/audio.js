var m = {
	audioObj : new Audio("music/sound.mp3"),
	timerID : null,
	play: function(startTime){
		this.audioObj.currentTime = startTime;
		this.audioObj.play();
		clearTimeout(this.timerID);
		this.timerID = setTimeout("m.audioObj.pause()", 1800);
	}
}
$("button").bind("tap", function(evt){
	m.play(parseInt(evt.target.value));
});
