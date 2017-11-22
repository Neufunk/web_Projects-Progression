$('document').ready(function() {
	menuSwitch();
});

var open = false;

function menuSwitch() {
	var menu = $('#menu-container');
	$('#menuToggle').click(function() {
		if (open == false && $(window).scrollTop() < 10) {
			open=true;
			menu.slideDown();
		} else if (open == false && $(window).scrollTop() >= 10) {
			$('body,html').animate({scrollTop : 0}, 500);
			setTimeout(function(){
			menu.slideDown();
			open=true;
		}, 700);
		} else {
			menu.slideUp();
			open = false;
		}
	});
}