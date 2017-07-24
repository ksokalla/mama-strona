'use strict';
$(function () {
	
	/*--------smooth scroll------*/
	
	$('a[href^="#"]').on('click', function () {
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top - 90
		}, 1000, 'swing');
	});
	
	/*-------- smooth scroll end -------------------*/
	
});