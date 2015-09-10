define(['jquery'], function($){

	var scrolling = false;
	var timeOut,
	    interval;

	return function onScroll(functions) {
		if(!$('body').hasClass('ie9') && !$('body').hasClass('ie8')){
			$(window).on('scroll', function(){
				clearTimeout(timeOut);

				timeOut = setTimeout(function() {
					cancelAnimationFrame(interval);
					scrolling = false;
				}, 250);

				if(scrolling === false){
					function animationFrame(){
						functions();
						interval = requestAnimationFrame(animationFrame);
					}
					animationFrame();
					scrolling = true;
				}
			});
		}
		functions();
	};

});
