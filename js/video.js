var video = document.getElementsByClassName("video")[0];
var volumeSlider = document.getElementById("slider");
var volumeInfo = document.getElementById("volume");
var isMuted = false;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
    video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
 	video.play();
	 updateVolumeInfo();
 });

 document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	var newTime = video.currentTime + 10;
	if (newTime > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime = newTime;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (isMuted) {
		video.muted = false;
		isMuted = false;
		this.textContent = "Mute";
	} else {
		video.muted = true;
		isMuted = true;
		this.textContent = "Unmute";
	}
});

function updateVolumeInfo() {
    volumeInfo.textContent = volumeSlider.value + "%";
}

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = volumeSlider.value * .01;
	updateVolumeInfo();
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
