(function($) {
	var pos = $(".circle").offset().top;
	
	$(window).scroll(function() {
		if ($(window).scrollTop()+400 > pos) {
			$(".target").addClass("collapse");
		}
		else {
			$(".target").removeClass("collapse");
		}
		$(".three").html("Target: "+pos+" "+"Window: "+$(window).scrollTop());
	});
})(jQuery);