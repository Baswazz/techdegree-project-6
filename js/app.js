// Media element player settings
$('video').mediaelementplayer({
	features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen'], 
	stretching: 'responsive',
});

const video    = document.getElementsByTagName('video')[0];
const caption = document.querySelectorAll('p.caption span');

// Listen for time updates in video
video.addEventListener('timeupdate', function() {

	// console.log(video.currentTime);
	
	// Loop through the caption items
	for (let i = 0; i < caption.length; i += 1) {
		// console.log(captions[i]);
		let startTime = caption[i].dataset.start;
		let endTime = caption[i].dataset.end;

		if (video.currentTime > startTime && video.currentTime < endTime) {
			// console.log('Data start: ', start);
			// console.log('Data end: ', end);
			caption[i].classList.add('highlight');
		} else {
			caption[i].classList.remove('highlight');
		}
	}
});