//$('wrapper').addClass('loaded');
//
//$('.icon-menu').click(function (event) {
//	$(this).toggleClass('active');
//	$('.menu__body, .ibg').toggleClass('active');
//	$('body').toggleClass('lock');
//});
//
//
//
//function ibg() {
//	$.each($('.ibg'),function (index,val) {
//		if ($(this).find('img').length > 0) {
//			$(this).css('background-image','url("' + $(this).find('img').attr('src') + '")');
//		}
//	});
//}
//ibg();


$('.filter__link').click(function (event) {
	var i = $(this).data('filter');
	if (i == 1) {
		$('.portfolio__image').show();
	} else {
		$('.portfolio__image').hide();
		$('.portfolio__image.f_' + i).show();
	}
	$('.filter__link').removeClass('active');
	$(this).addClass('active');

	return false;
});