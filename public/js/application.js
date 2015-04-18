$(document).ready(function() {
	$('#toggle-menu').hide();
	$('.more-content').hide();
	$('.lifetime-content').hide();
	$('.tobitch-content').hide();


		$('.more-me').on('click', function(event) {
			event.preventDefault();
			$('.more-content').toggle();
		})

		$('.container').on('click', '.menu-nav', function(event) {
			event.preventDefault();
			$('#toggle-menu').toggle();
		})

		$('.lifetime-link').on('click', function(event) {
			event.preventDefault();
			$('.lifetime-content').toggle();
			$('.tobitch-link').toggle();
			$('.lifetime-down').toggle();
			$(this).toggleClass("fa fa-chevron-right 3x");
		})

		$('.tobitch-link').on('click', function(event) {
			event.preventDefault();
			$('.tobitch-content').toggle();
			$('.lifetime-link').toggle();
			$('.tobitch-down').toggle();
			$(this).toggleClass("fa fa-chevron-right 3x");

		})
});
