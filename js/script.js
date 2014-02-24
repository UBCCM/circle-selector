(function($) {
	var pos = $(".circle").offset().top;
	
	$(window).scroll(function() {
		if ($(window).scrollTop() > pos) {
			$(".target").addClass("collapse");
		}
		else {
			$(".target").removeClass("collapse");
		}
		
	});
})(jQuery);