$('wrapper').addClass('loaded');

$('.header__burger').click(function (event) {
	$(this).toggleClass('active');
	$('.header__list').toggleClass('active');
	$('body').toggleClass('lock');
});
