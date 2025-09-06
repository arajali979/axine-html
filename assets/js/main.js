/***************************************************
==================== JS INDEX ======================
****************************************************
Mobile Menu Js


****************************************************/

(function ($) {
	"use strict";

	// Data Js
	$("[data-bg-image]").each(function () {
		var $this = $(this),
			$image = $this.data("bg-image");
		$this.css("background-image", "url(" + $image + ")");
	});

	// Nice Select Js
	if ($("select").length > 0) {
		$("select").niceSelect();
	}

	// Accordion Js
	if ($(".accordion-item").length > 0) {
		$(".accordion-item .faq-title").on("click", function () {
			if ($(this).parent().hasClass("active")) {
				$(this).parent().removeClass("active");
			} else {
				$(this).parent().siblings().removeClass("active");
				$(this).parent().addClass("active");
			}
		});
	}
})(jQuery);
