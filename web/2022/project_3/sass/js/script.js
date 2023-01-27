$('wrapper').addClass('loaded');

$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body, .ibg').toggleClass('active');
	$('body').toggleClass('lock');
});



function ibg() {
	$.each($('.ibg'),function (index,val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image','url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();



$('.filter__link').click(function (event) {
	var i = $(this).data('filter');
	if (i == 1) {
		$('.image-body__item').show();
	} else {
		$('.image-body__item').hide();
		$('.image-body__item.f_' + i).show();
	}
	$('.filter__link').removeClass('active');
	$(this).addClass('active');

	return false;
});



function sort__link() {
	$('.post__item.f_2').hide();
	$('.post__item.f_3').hide();
	$('.post__item.f_4').hide();
	$('.post__item.f_5').hide();
	$('.post__item.f_6').hide();
	$('.post__item.f_7').hide();
}
sort__link();


$('.sort__link').click(function (event) {
	var i = $(this).data('sort');
	if (i == 0) {
		$('.post__item').show();
	} else {
		$('.post__item').hide();
		$('.post__item.f_' + i).show();
	}
	$('.sort__link').removeClass('active');
	$(this).addClass('active');

	return false;
});