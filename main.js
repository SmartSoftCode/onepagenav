(function ($) {
 "use strict";
 
	/* one page active  */
   $("#nav").onePageNav();
	
 	//jQuery for page scrolling feature - requires jQuery Easing plugin
	jQuery(function($) {
		$('#nav a').bind('click', function(event) {
			var $anchor = $(this);
			$('html').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 20
			}, 1000, 'easeInOutQuint');
			event.preventDefault();
		});
	}); 	
 

	
	
 /*---------------------
 TOP Menu Stick
--------------------- */
	var s = $("#sticker");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
		s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});	
	

 
 
})(jQuery);  