

function displayImage() {

	console.log('displayImage', app.counter);

	var image = imageList[app.counter];

	$('.carrousel img').attr('src', image.file);
}

function getRandomNumber(min, max, excludedNumber) {

	while (true) {
		var num = Math.floor(Math.random() * max);

		if (num != excludedNumber) {
			break;
		}
	}

	return num;
}

function next() {

	app.counter++;

	if (app.counter == imageList.length) {
		app.counter = 0;
	}

	displayImage();
}

function previous() {
	app.counter--;

	if (app.counter < 0) {
		app.counter = imageList.length - 1;
	}

	displayImage();
}

function toggleModeAuto() {
	if (app.intervalId) {

		console.log('clear interval', app.intervalId);
		clearInterval(app.intervalId);
		app.intervalId = null;
	} else {
		console.log('startinterval');

		app.intervalId = setInterval(function () {

			next();

		}, 3000);	
	}
}