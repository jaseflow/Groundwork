
jQuery(function($) {
	$('.style-nav a').on('click', '', function(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		$('.content-container').load(url);
	});
	$('.working a').click();

	var menuHeight = $('.style-nav').height();

	$('.style-nav').on('click', '.nav-toggle', function(e) {
		e.preventDefault();
		$('.nav-toggle-content').toggle();
	});


});