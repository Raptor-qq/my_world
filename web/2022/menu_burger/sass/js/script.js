$(document).ready(function () {
	$('.icon__menu').click(function (event) {	// Обращение к классу .header__burger и вешаем на него событие "клик"
		$('.icon__menu,.menu__body').toggleClass('active');	// При клике этим классам добавляется класс active и при нажатии, он убирался
		$('body').toggleClass('lock');	// При открытом меню блокируется скролл
	});
});

function ibg() {
	$.each($('.ibg'),function (index,val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image','url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();