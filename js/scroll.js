$(window).scroll(function() {
    if ($(this).scrollTop() >= 10 && open==false) {        // Si page scrollée + 10px
        $('#arrow-top').slideDown(300);    // Arrow slide in
        $('h1').css('display', 'none');
        $('#title').css('height', '3em');
        $('#menuToggle').css('top', '0.1em');
        $('#sub').css('padding-left', '0em');
        $('#home-logo').css('width', '4em');
    }else if ($(this).scrollTop() >= 10 && open==true) {
        $('#arrow-top').slideDown(300);    // Arrow slide in
        $('h1').css('display', 'none');
        $('#title').css('height', '3em');
        $('#menuToggle').css('top', '0.1em');
        $('#sub').css('padding-left', '0em');
        $('#home-logo').css('width', '4em');
        $('#menuToggle input').prop('checked', false);
        $('#menu-container').slideUp();
        open=false;
    } else { // si page non-scrollée
        $('#arrow-top').slideUp(300);   // Arrow slide down
        $('h1').css('display', '');
        $('#title').css('height', '');
        $('#menuToggle').css('top', '');
        $('#sub').css('padding-left', '');
        $('#home-logo').css('width', '');
    }
    if($(this).scrollTop() + $(window).height() == $(document).height()) {
    	$('#arrow-top').css('background', 'url(images/arrow-up-white.png) no-repeat');
   } else {
   		$('#arrow-top').css('background', "");
   }
});

function backtotop() {      // On arrow click
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
}