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

	// Preloader js

	// Sticky Js
	var lastScrollTop = "";
	function stickyMenu($targetMenu, $toggleClass) {
		var st = $(window).scrollTop();
		if ($(window).scrollTop() > 500) {
			if (st > lastScrollTop) {
				$targetMenu.removeClass($toggleClass);
			} else {
				$targetMenu.addClass($toggleClass);
			}
		} else {
			$targetMenu.removeClass($toggleClass);
		}

		lastScrollTop = st;
	}

	$(window).on("scroll", function () {
		if ($(".header-area").length) {
			stickyMenu($(".header-sticky"), "sticky");
		}
	});

	// Search Bar Js
	$(".header-search").on("click", function () {
		$(".search_popup").addClass("search-opened");
		$(".search-popup-overlay").addClass("opened");
	});
	$(".search_close_btn").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(".search-popup-overlay").removeClass("opened");
	});
	$(".search-popup-overlay").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(this).removeClass("opened");
	});

	// Mobile Menu Js
	$(".main-mobile-menu").meanmenu({
		meanMenuContainer: ".mobile_menu",
		meanScreenWidth: "10000",
		meanExpand: ['<i class="fa-light fa-plus"></i>'],
	});

	$(".mobile_menu_bar").on("click", function () {
		$(".hamburger-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".hamburger_close_btn").on("click", function () {
		$(".hamburger-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
		$(".mobile_menu_bar").removeClass("on");
	});
	$(".body-overlay").on("click", function () {
		$(".hamburger-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
		$(".mobile_menu_bar").removeClass("on");
	});

	// Back to Top Js
	function back_to_top() {
		var btn = $("#back_to_top");
		var btn_wrapper = $(".back-to-top-wrapper");

		$(window).on("scroll", function () {
			if ($(window).scrollTop() > 1200) {
				btn_wrapper.addClass("back-to-top-btn-show");
			} else {
				btn_wrapper.removeClass("back-to-top-btn-show");
			}
		});

		btn.on("click", function (e) {
			e.preventDefault();
			$("html, body").animate({ scrollTop: 0 }, "300");
		});
	}
	back_to_top();

	// Nice Select Js
	if ($("select").length > 0) {
		$("select").niceSelect();
	}

	// Project Hover Js
	if ($(".project-main-wrapper").length) {
		$(".project-title").hover(function () {
			$(this).siblings(".project-title").removeClass("active");
			$(this).addClass("active");
			const newSrc = $(this).data("src");
			const $image = $(".project-active-thumb img");
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

	// Fun Fact Js
	if ($(".odometer").length > 0) {
		$(".odometer").appear(function () {
			var odo = $(".odometer");
			odo.each(function () {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});
	}

	// Price js
	var price = $(".price-number");
	var duration = $(".price-duration");
	var year = $("#year");
	var month = $("#month");

	year.on("click", function () {
		$(this).addClass("active");
		month.removeClass("active");

		price.each(function () {
			$(this).text($(this).data("year-price"));
		});

		duration.text("Year");
	});

	month.on("click", function () {
		$(this).addClass("active");
		year.removeClass("active");

		price.each(function () {
			$(this).text($(this).data("month-price"));
		});

		duration.text("Month");
	});

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
					".swiper-slide-active .slide-text",
				);
				if (activeSlide) {
					activeSlide.style.opacity = "1";
				}
			},
		},
		breakpoints: {
			320: {
				slidesPerView: 1.1,
			},
			576: {
				slidesPerView: 1.2,
			},
			768: {
				slidesPerView: 1.3,
			},
			992: {
				slidesPerView: 1.5,
			},
		},
	});

	// Testimonial Swiper Js
	var testimonial = new Swiper(".testimonial-slider", {
		loop: false,
		centeredSlides: true,
		initialSlide: 1,
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
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 90,
			},
			576: {
				slidesPerView: 1.5,
				spaceBetween: 60,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2.6,
			},
			1140: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
		},
	});

	// Brand Slider Js
	if ($(".fa-brand-slider").length > 0) {
		var brand = new Swiper(".fa-brand-slider", {
			slidesPerView: 4,
			spaceBetween: 140,
			loop: false,
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				576: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 60,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 80,
				},
				1024: {
					slidesPerView: 5,
				},
			},
		});
	}

	// Testimonial Slider Js
	if ($(".fa-testimonial-slider2").length > 0) {
		var testimonial = new Swiper(".fa-testimonial-slider2", {
			slidesPerView: 3,
			spaceBetween: 24,
			loop: false,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3,
				},
			},
		});
	}
})(jQuery);
