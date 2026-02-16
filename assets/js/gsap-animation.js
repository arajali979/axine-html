(function ($) {
	"use strict";

	/* ------------- GSAP Registration -------------*/

	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

	if ($("#smooth-wrapper").length && $("#smooth-content").length) {
		gsap.config({
			nullTargetWarn: false,
		});

		let smoother = ScrollSmoother.create({
			smooth: 1,
			effects: true,
			smoothTouch: 0.1,
			normalizeScroll: false,
			ignoreMobileResize: true,
		});
	}
	window.gsapController = function () {
		/* ------------- Match media Js -------------*/
		let mediaMatch = gsap.matchMedia();
	};
})(jQuery);
