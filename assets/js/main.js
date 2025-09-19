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

	// Project Hover active change
	if ($(".project-wrapper-three").length) {
		$(".project_item").hover(function () {
			// Remove active class from all siblings
			$(this).siblings(".project_item").removeClass("active");

			// Add active class to hovered item
			$(this).addClass("active");

			// Update image dynamically
			const newSrc = $(this).data("src");
			const $image = $(".project_list_img img");

			// Animate zoom out, change image, then zoom back in
			$image
				.fadeOut(300)
				.css("transform", "scale(0.9)")
				.promise()
				.done(function () {
					$image.attr("src", newSrc).fadeIn(300).css("transform", "scale(1)");
				});
		});
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
