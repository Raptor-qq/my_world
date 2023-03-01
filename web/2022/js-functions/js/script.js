//Объявление функции (Function Declaration)

function имя(параметры) {
	// тело (код) функции
}

//Имя функции и её предназначение
/*
Как правило, в имени используются опеределенные префиксы,
обозначающие действие, после которых следует объект действия.

Например, функции, начинающиеся с
"show..." обычно что-то показывают,
"get..." – возвращают значение,
"calc..." – что-то вычисляют,
"create..." – что-то создают,
"check..." – что-то проверяют и возвращают логическое
значение, и т.д.

Примеры:
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
и т.д.
*/

/*
Функция должна делать только то,
что явно подразумевается её названием.
И это должно быть одним действием.
Два независимых действия обычно подразумевают две функции,
даже если предполагается, что они будут вызываться вместе (в этом случае мы
можем создать третью функцию, которая будет их вызывать).
*/

//Запуск функции

// Функция вывода сообщения
function showMessage() {
	console.log('Сообщение!');
}
showMessage();

// Вложенность и видимость функций
function getSumm() {
	let numOne,numTwo;

	function getNumOne() {
		numOne = 1;
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(numSumm);
}
//getNumOne(); //Ошибка
getSumm();

"use strict"
if (2 > 1) {
	function getSumm1() {
		let numOne,numTwo;

		function getNumOne1() {
			numOne = 1;
		}
		function getNumTwo1() {
			numTwo = 2;
		}
		getNumOne1();
		getNumTwo1();

		let numSumm1 = numOne + numTwo;
		console.log(numSumm1);
	}
}
getSumm1();

//Локальные и внешние переменные

function showMessage() {
	// Локальная переменная
	let message = "Сообщение";
	console.log(message);
}

//console.log(message); //Ошибка

// Внешняя переменная
let message;

function showMessage2() {
	// Используется внешняя переменная
	message = "Сообщение";
}

showMessage2();

console.log(message);

//-----

// Внешняя переменная
let message1 = "Сообщение №1";

function showMessage3() {
	// Локальная переменная
	let message1 = "Сообщение №2";
	console.log(message1);
}
console.log(message1);
showMessage3();

//-----

// Глобальные переменные
let globalVar = "Я глобальная переменная";

function getSumm2() {
	let numOne,numTwo;

	function getNumOne() {
		numOne = 1;
		console.log(globalVar);
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(globalVar);
}
console.log(globalVar);

getSumm2();

//-----

// Параметры (аргументы)
function calcSumm(numOne,numTwo) {
	console.log(`Переменная numOne:${numOne}`);
	console.log(`Переменная numTwo:${numTwo}`);

	let numSumm = numOne + numTwo;

	console.log(`Сумма:${numSumm}`);
}

calcSumm(5,5);

function calcSumm1(numOne = 1,numTwo = 2) {
	console.log(`Переменная numOne:${numOne}`);
	console.log(`Переменная numTwo:${numTwo}`);

	let numSumm = numOne + numTwo;

	console.log(`Сумма:${numSumm}`);
}

calcSumm1();

//-----

// Функции-колбэки
function calcSumm2(numOne,numTwo,more,less) {
	let numSumm = numOne + numTwo;

	if (numSumm > 3) {
		more();
	} else {
		less();
	}
}
function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}
calcSumm2(1,1,showMoreMessage,showLessMessage);

//-----

// Возврат результата
function calcSumm3(numOne,numTwo) {

	let numSumm = numOne + numTwo;

	// Возврат
	return numSumm;

	// Дальше код не выполняется

}
let funcRezult = calcSumm3(1,2);

console.log(`Сумма: ${funcRezult}`);

// Пример возврата
function calcSumm4(numOne,numTwo) {

	let numSumm = numOne + numTwo;

	if (numSumm >= 3) {
		// Возврат
		return numSumm;
	} else {
		return 'Сумма меньше 3';
	}
	// Дальше код не выполняется
}
let funcRezult1 = calcSumm4(1,2);

console.log(funcRezult1);

// Пример возврата
function calcSumm5(numOne,numTwo) {

	let numSumm = numOne + numTwo;

	return
	numSumm;

	// Дальше код не выполняется

}
let funcRezult2 = calcSumm5(1,2);

console.log(funcRezult2);

//-----

// Рекурсия
// Вызов другой функции в функции
function getSumm3(numOne,numTwo) {
	let numSumm = calcSumm6(numOne,numTwo);

	console.log(numSumm);
}
function calcSumm6(numOne,numTwo) {
	return numOne + numTwo;

}
getSumm3(5,5);

function calcSumm7(numOne,numTwo) {
	let result = 1;
	// умножаем result на numOne numTwo раз в цикле
	for (let i = 0; i < numTwo; i++) {
		result *= numOne;
	}
	return result;
}
console.log(calcSumm7(2,3));

// Рекурсия вышестоящего примера
function calcSumm8(numOne,numTwo) {
	if (numTwo === 1) {
		return numOne;
	} else {
		return numOne * calcSumm8(numOne,numTwo - 1);
	}
}
console.log(calcSumm8(2,3));

//-----

// Функциональное выражение (Function Expression)
let showMessage4 = () =>
	console.log('Привет!');

showMessage4();

//Пример
function getSumm4() {
	let summ = 1 + 2;
	console.log(summ);
};

let someVar = getSumm4;

someVar();
getSumm4();

//======

//Функции стрелки(arrow functions)
/*
// Функциональное выражение (Function Expression)
let имя переменной = function (параметр, ...параметр) {
	return выражение;
};

// Cтрелочная функция (arrow function)
let имя переменной = (параметр, ...параметр) => выражение
*/
//-----

// Однострочная стрелочная функция

let getMessage = (text,name) => text + ', ' + name + '!';
console.log(getMessage('Привет','Вася'));


// Многострочная стрелочная функция
let getMessage1 = (text,name) => {
	let message = text + ', ' + name + '!';
	return message;
};
console.log(getMessage1('Привет','Вася'));

//======

// Планирование setTimeout и setInterval
/*
Что бы реализовать планирование существуют два метода:
1.	setTimeout позволяет вызвать функцию один раз
	через определённый интервал времени
2.	setInterval позволяет вызывать функцию регулярно,
	повторяя вызов через определённый интервал времени.
*/
/*
setTimeout(функция или код, задержка, параметр, ...параметр);
setInterval(функция или код, задержка, параметр, ...параметр);
*/

function showMessage5(text,name) {
	console.log(`${text}, ${name}!`);
}
//setInterval(showMessage, 500, 'Привет', 'Вася');
setTimeout(showMessage5,500,'Привет','Вася');

//Реверсивный setTimeout
function showMessage5(text,name) {
	console.log(`${text}, ${name}!`);
	setTimeout(showMessage5,500,'Привет','Вася');
}
setTimeout(showMessage5,500,'Привет','Вася');

//---

//Пример
function showNumber(num) {
	console.log(num);
	if (num < 5) {
		setTimeout(showNumber,1000,++num);
	}
}
setTimeout(showNumber,1000,1);

//Работа clearTimeout
function showNumber1(num) {
	console.log(num);
	let timeId = setTimeout(showNumber1,1000,++num)
	if (num === 6) {
		clearTimeout(timeId);
	}
}
setTimeout(showNumber1,1000,1)

//Работа clearInterval
let result = 0;
function showNumber2(num) {
	result += num;
	console.log(result);
	if (result === 5) {
		clearInterval(timeId);
	}
}
let timeId = setInterval(showNumber2,1000,1);

//---

setTimeout(function () {
	console.log('Привет!');
},1000);

setTimeout(() => {
	console.log('Привет!');
},1000);


//----

function showMessageOne() {
	console.log("А я первый!");
}
function showMessageTwo() {
	console.log("А я второй(");
}

setTimeout(showMessageTwo,0);

showMessageOne();

//---

// Применение функций

// Функция соединения строк
function createMassage(text,name) {
	return `${text}, ${name}!`;
}
// Функция вывода в консоль
function showMassage(message) {
	console.log(message);
}
// Объединяющая функция, вызывает обе функции
function initMessage(text,name) {
	showMassage(createMassage(text,name));
}

initMessage('Привет','Фрилансер');

//=================================================================================

//ДОМАШКА
//Решить задачи:

// Задача №1
// Кто попадет в консоль первым Вася или Коля?
function showName() {
	console.log('Вася!');
}
setTimeout(showName,0);
console.log('Коля!');
//Коля

// Задача №2
// Верно ли вызвана функция
showMessage6();
function showMessage6() {
	console.log('Сообщение');
}
//Верно

// Задача №3
// Верно ли вызвана функция
/*
showMessageHw();
let showMessageHw = () =>
	console.log('Сообщение');
// Не верно
*/

// Задача №4
// Как решить проблему?
if (2 > 1) {
	function showMessage7() {
		console.log('Сообщение');
	}
}
showMessage7(); // Error (showMessage is not defined)
//Все ок, че за кипиш