console.log('main.js chargé');

var app = {};
app.intervalId = null;
app.counter = 0;

console.log(app);


$('.toggle-control-bar').on('click', function () {
	console.log('click');

	$('.control-bar').toggle();
});

$('.next').on('click', function () {
	next();
});


$('.previous').on('click', function () {
	previous();
});

$('.random').on('click', function () {

	app.counter = getRandomNumber(0, imageList.length, app.counter);

	displayImage();
});

$('.toggle-auto').on('click', function () {
	toggleModeAuto();
});


$(document).on('keydown', function (event) {

	console.log(event.which);

	if (event.which == 39) { // arrow right
		next();
	}

	if (event.which == 37) { // arrow left
		previous();
	}

	if (event.which == 32) { // space
		toggleModeAuto();
	}

});



displayImage();







