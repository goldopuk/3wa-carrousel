console.log('main.js chargé');

$('.toggle-control-bar').on('click', function () {
	console.log('click');

	$('.control-bar').toggle();
});

$('.next').on('click', function () {

	counter++;

	if (counter == imageList.length) {
		counter = 0;
	}

	displayImage(counter);
});

var counter = 0;

displayImage(counter);



