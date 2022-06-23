$(document).ready(
	$('.icon').click(function () {
		$('.main-nav').slideToggle(200);
		if ($('.icon').hasClass('fa-bars')) {
			$('.icon').addClass('fa-times');
			$('.icon').removeClass('fa-bars');
		} else {
			$('.icon').addClass('fa-bars');
			$('.icon').removeClass('fa-times');
		}
	}),
);
