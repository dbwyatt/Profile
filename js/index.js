$(function() {

	// $(".navbar li").on("click", function() {
	// 	$(".active").removeClass("active");
	// 	$(this).addClass("active");
	// }); // navbar link click

	$('[data-target="page"]').on('click', function() {
		var $this = $(this);
		var current_page = "#" + $('.current-page').attr('id');
		if ($this.attr('data-page') != current_page) {
			$(window).trigger("page_load");
		}
	}); // page change


	$(window).off("page_load").on("page_load", function() {
		var hash = window.location.hash;
		console.log(hash);
		$('.current-page').removeClass('current-page').fadeOut("fast", function() {
			$($(hash).attr('data-page')).fadeIn().addClass('current-page');
		});
	}); //page_load function

	$(window).trigger("page_load");

}); //ready