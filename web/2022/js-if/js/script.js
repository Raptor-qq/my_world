let message = 'freelancer';
if (12 > 5) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}

let first = 5;
let second = 5;

if (first === second) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}

//Более сложное условие
if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}

//Преобразование типов
if ("") {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}

//Более короткая запись
//Код выполняется только если
//выражение в скобках вернет true
if (2 > 1) console.log(message);

if (58 / 2 > 80) {
	console.log(message);
} else {
	console.log('Условие не выполнено :(');
}

let number = 50;
if (number > 10) {
	console.log(message);
} else {
	console.log('Условие не выполнено :(');
}

//Проверка нескольких условий
if (number > 50) {
	console.log('number больше 50');
} else if (number > 30) {
	console.log('number больше 30');
} else if (number > 10) {
	console.log('number больше 10');
} else if (number > 1) {
	console.log('number больше 1');
} else {
	console.log('Условие не выполнено :(');
}

let message1 = "Привет";
let message1End;

if (5 > 1) {
	message1End = ", Вася!";
} else {
	message1End = ", Оля!";
}

message1 += message1End;
console.log(message1);

message1End = 5 > 10 ? ", Вася!" : ", Оля!";

message1 = "Привет";
message1 += message1End;
console.log(message1);

message1 = 5 > 10 ? "Привет, Вася!" : "Привет, Оля!";
console.log(message1);

message1End = 5 > 50 ? ", Вася!" :
	5 > 30 ? ", Оля!" :
		5 > 10 ? ", Миша!" :
			5 > 1 ? ", Андрей!" : ", Иннокентий!"

message1 = "Привет";
message1 += message1End;
console.log(message1);

//========================================================================================================================================================

//ДОМАШКА
/*
Какой или какие из вариантов не верны:
*/

//Вариант №1
if (1 === "1") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
//Вариант №2
if (5 == "5") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
//Вариант №3
let messageHW = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(messageHW);

//Вариант №4
if (0) {
	console.log('Ложь!');
} else if (" ") {
	console.log('Истина!');
}