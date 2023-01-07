$(document).ready(function () {
	$('.header__burger').click(function (event) {	// Обращение к классу .header__burger и вешаем на него событие "клик"
		$('.header__burger,.header__menu').toggleClass('active');	// При клике этим классам добавляется класс active и при нажатии, он убирался
		$('body').toggleClass('lock');	// При открытом меню блокируется скролл
	});
});