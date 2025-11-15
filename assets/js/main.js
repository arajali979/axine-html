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

	// Project Hover Js
	if ($(".project-wrapper-three").length) {
		$(".project_item").hover(function () {
			$(this).siblings(".project_item").removeClass("active");

			$(this).addClass("active");

			const newSrc = $(this).data("src");
			const $image = $(".project_list_img img");

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

	// Rating Js
	if ($(".fill-ratings span").length > 0) {
		var star_rating_width = $(".fill-ratings span").width();
		$(".star-ratings").width(star_rating_width);
	}

	// Project Swiper Js
	var project = new Swiper(".fa-project-slider", {
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 2,
		coverflowEffect: {
			rotate: -12,
			stretch: 0,
			depth: 200,
			modifier: 1,
			slideShadows: false,
		},
		loop: true,
		speed: 800,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		on: {
			slideChangeTransitionStart: function () {
				document.querySelectorAll(".slide-text").forEach(function (el) {
					el.style.opacity = "0";
					el.style.transition = "opacity 0.5s ease";
				});
			},
			slideChangeTransitionEnd: function () {
				var activeSlide = document.querySelector(
					".swiper-slide-active .slide-text"
				);
				if (activeSlide) {
					activeSlide.style.opacity = "1";
				}
			},
		},
	});

	// Testimonial Swiper Js
	var testimonial = new Swiper(".testimonial-slider", {
		loop: false,
		slidesPerView: 3,
		spaceBetween: 40,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				let number = (index + 1).toString().padStart(2, "0");
				return '<span class="' + className + '">' + number + "</span>";
			},
		},
	});
})(jQuery);
