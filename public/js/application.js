$(document).ready(function() {


	$('#toggle-menu').hide();
	$('.more-content').hide();
	$('.project-content').hide();

	

	$('.more-me').bind('click', function(event) {
		event.preventDefault();
		$('.more-content').toggle();
	})

	// $('.container').bind('click', '.menu-nav', function(event) {
	// 	event.preventDefault();
	// 	$('#toggle-menu').toggle();
	// })

	$('.lifetime-link').bind('click', function(event) {
		event.preventDefault();
		$('.lt-content').toggle();
		$('.project2-link').toggle();
		$('.lifetime-down').toggle();
		$(this).toggleClass("fa fa-chevron-right 3x");
	})

	$('.project2-link').bind('click', function(event) {
		event.preventDefault();
		$('.p2-content').toggle();
		$('.lifetime-link').toggle();
		$('.project2-down').toggle();
		$(this).toggleClass("fa fa-chevron-right 3x");
	})

	$('.blog-icon').bind('click', function(event) {
		event.preventDefault();
		$('.content-container').toggle();
		$('.blog-container').toggle();
		$('html, body').animate({ scrollTop: 0 }, 0);
	})

});
