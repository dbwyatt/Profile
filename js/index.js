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
		$('.current-page').removeClass('current-page').fadeOut("fast", function() {
			$(page).fadeIn().addClass('current-page');
		});
	}


	// for (var i in window.endorsements) {
	// 	var endorsement = window.endorsements[i],
	// 		template = '<blockquote class="endorsement">' + endorsement.endorsement + '<span class="author">' + endorsement.name + '</span></blockquote>';
	// 	document.getElementById('endorsements-container').innerHTML += template;
	// }

	document.getElementById('current-year').innerHTML = new Date().getFullYear();
	document.getElementById('number-of-years').innerHTML = new Date().getFullYear() - 2013;

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