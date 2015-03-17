$(function() {

	// $(".navbar li").on("click", function() {
	// 	$(".active").removeClass("active");
	// 	$(this).addClass("active");
	// }); // navbar link click

	$('[data-target="page"]').on('click', function() {
		var $this = $(this);
		var current_page = "#" + $('.current-page').attr('id');
		if ($this.attr('data-page') != current_page) {
			$('.current-page').removeClass('current-page').fadeOut("fast", function() {
				$($this.attr('data-page')).fadeIn().addClass('current-page');
			});
		}
	}); // page change


}); //ready