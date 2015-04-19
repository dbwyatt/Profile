$(function() {

	// $(".navbar li").on("click", function() {
	// 	$(".active").removeClass("active");
	// 	$(this).addClass("active");
	// }); // navbar link click

	if (window.location.hash != '') {
		pageChange(window.location.hash);
	}
	else {
		pageChange('#home');
	}
	
	$(window).on('hashchange', function() {
		if (window.location.hash == '') {
			pageChange('#home-page');
		}
		else {
			pageChange(window.location.hash);
		}
	}); //hashchange

	function pageChange(page) {
		console.log(page);
		$('.current-page').removeClass('current-page').fadeOut("fast", function() {
			$(page).fadeIn().addClass('current-page');
		});
	}

	// $('[data-target="page"]').on('click', function() {
	// 	var $this = $(this);
	// 	var current_page = "#" + $('.current-page').attr('id');
	// 	if ($this.attr('data-page') != current_page) {
	// 		// $(window).trigger("page_load");
	// 		pageChange($this.data('page'));
	// 	}
	// }); // page change

	// $(window).off("page_load").on("page_load", function(event) {
	// 	var hash = window.location.hash;
	// 	console.log(hash);
	// 	$('.current-page').removeClass('current-page').fadeOut("fast", function() {
	// 		$($(hash).attr('data-page')).fadeIn().addClass('current-page');
	// 	});
	// }); //page_load function

	// $(window).trigger("page_load");

	// $('a[href*=#]:not([href=#])').click(function() {
	// 	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

	// 		var target = $(this.hash);
	// 		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	// 		if (target.length) {
	// 			$('html,body').animate({
	// 			   scrollTop: target.offset().top
	// 			}, 1000);
	// 			return false;
	// 		}
	// 	}
	// });

}); //ready