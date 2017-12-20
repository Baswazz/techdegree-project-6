/*
mediabla.addEventListener('captionschange') => {

}

addEventListener('click', => {
	
})


$('video').mediaelementplayer({
	stretching: 'responsive',
	startLanguage: 'en',

	success: function(media, node, intance) {
		console.log('Media attached!');
		media.addEventListener('captionschange', function () {
			console.log('Listen for captionschange!');
		});
	}
});

var videos = $('video').mediaelementplayer({
	stretching: 'responsive',
	startLanguage: 'en',	
});

Er is een div mejs__captions-text 6 hiermee kan je met een event laten listenen voor changes. Ook krijg je een getal mee.
Deze kun je gebruiken om te zorgen dat ie het juiste tekstje bij de juiste caption toont.
Waar je ook even naar moet kijken is dat hij de juiste div pakt want als er meer videos zijn...
*/

$('video').mediaelementplayer({
	stretching: 'responsive',
	startLanguage: 'en',
});

const captionChange = document.querySelector('span.mejs__captions-text');
let test = captionChange.textContent;
console.log(captionChange);
test.addEventListener('change', () => {
	console.log('Changed!');
});


// $(captionChange).bind("DOMSubtreeModified",function(){
//   console.log('Changed!');
// });