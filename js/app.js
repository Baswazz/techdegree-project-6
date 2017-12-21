// Media element player settings
$('video').mediaelementplayer({
	features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen'], 
	stretching: 'responsive',
});

const video    = document.getElementsByTagName('video')[0];
const captions = document.querySelectorAll('p.caption span');

// Listen for time updates in video
video.addEventListener('timeupdate', function() {

	// console.log(video.currentTime);
	
	// Loop through the caption items
	for (let i = 0; i < captions.length; i += 1) {
		// console.log(captions[i]);
	}
});