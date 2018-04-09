$(function() {
  // animate on scroll
  new WOW().init();
});


/* ================================================
                     NAVIGATION
=================================================== */

$(function() {

	$(window).scroll(function(){

		if($(this).scrollTop() < 50) {
			//hide nav
			$("nav").removeClass("mg-top-nav");
			$("nav").addClass("mg-top-nav-2");
			$("#back-to-top").fadeOut();

		} else {
			//show nav
			$("nav").addClass("mg-top-nav");
			$("nav").removeClass("mg-top-nav-2");
			$("#back-to-top").fadeIn();
		}

	})

});

$(function() {

	$("a.smooth-scroll").click(function(event){

		event.preventDefault();

		// get/return id like #about, #work, #team and etc
		var section = $(this).attr("href");

		$('html, body').animate({
			scrollTop: $(section).offset().top - 64
		}, 1250, "easeInOutExpo");

	})

});

// Close mobile menu on click

$(function() {
	
	$(".navbar-collapse ul li a").on("click touch", function(){
		$(".navbar-toggle").click();
	});
	
});

// Blur home focus
$(function() {

	$(window).scroll(function(){

		if($(this).scrollTop() < 50) {
			//hide nav
			$("#mg-menu ul li a").blur();
		}
		
	});
	
});
/* ================================================
                     PORTFOLIO
=================================================== */

$(function() {
  $("#portfolio-items").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
		responsive : {
				// breakpoint from 0 up
				0 : {
						items: 1
				},
				// breakpoint from 650 up
				650 : {
						items: 2
				}
		}
  });
});

/* ================================================
                     ABOUT
=================================================== */

$(function() {
  $("#description").owlCarousel({
    items: 1,
		dots: false,
		nav: true,
		navText: ["Español","English"]
  });
});