// Цикл WHILE

// Синтаксис
/*
while (Условие) {
	// Тело цикла
	// Тут будет выполняться код
}
*/

// Пример
let num = 0;
while (num < 5) {
	console.log(num);
	num++;
}

// Пример
num = 5;
while (num) {
	console.log(num);
	num--;
}

// Пример без {}
num = 5;
while (num) console.log(num--);

// Конструкция DO...WHILE
num = 0;
do {
	console.log(num);
	num++;
} while (num < 0);

// Цикл FOR
// Синтаксис
/*
for (Начало; Условие; Шаг) {
	// Тело цикла
	// Тут будет выполняться код
}
*/

// Пример
for (let num1 = 0; num1 < 5; num1++) {
	console.log(num1);
}
/*
Работа цикла for:
1) Выполняется начало - let num = 0
2) Выполняется условие - num < 5
3) Если условие true выполняется
	тело цикла - console.log(num)
4) Выполняется шаг - num++
Повтор начиная с пункта №2
*/

// «встроенное» объявление переменной
/*
for (let num = 0; num < 5; num++) {
	console.log(num);
}
console.log(num);
*/


// Существующая переменная
let num2;
for (num2 = 0; num2 < 5; num2++) {
	console.log(num2);
}
console.log(`Вывод вне цикла: ${num2}`);

/*
// Можно убрать любую часть цикла
let num = 0;
for (; num < 5; num++) {
	console.log(num);
}
//---
*/
/*
let num = 0;
for (; num < 5;) {
	num++;
	console.log(num);
}
*/
//---
/*
// Бесконечный цикл
let num6 = 0;
for (; ;) {
	num6++;
	console.log(num6);
}
*/

// Директива break
num = 0;
for (; num < 5; num++) {
	console.log(num);
	if (num == 2) break;
}
console.log(`Работа окончена, num = ${num}`);

// Директива continue
num = 0;
for (; num < 5; num++) {
	if (num == 2) continue;
	console.log(num);
}

// Директива break/continue и "?" (приведет к ошибке)
/*
num = 0;
for (; num < 5; num++) {
	(num != 2) ? console.log(num) : continue;
}
*/

firstFor: for (num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 2) {
			continue firstFor;
		}
		console.log(size);
	}
}

//========================================================================================================================================================
//========================================================================================================================================================
//ДОМАШКА
/*
Решить задачи:
*/

//Задача №1
//Вывести в консоль числа от 1 до 5

for (num = 1; num < 6; num++) {
	console.log(num);
}

//Задача №2

num = 8;
while (num) {
	//Последний результат 1, потому что num всегд будет  больше ноля
	console.log(num);
	num--;
}

//Задача №3. Переписать на while

for (num = 0; num < 3; num++) {
	console.log(`Число: ${num}`);
}

num = 0;
while (num < 3) {
	console.log(`Число: ${num}`);
	num++;
}

//Задача №4. Прекратить работу цикла №1 когда size равна 1

//Цикл №1
first: for (num = 0; num < 2; num++) {
	//Цикл №2
	for (size = 0; size < 3; size++) {
		console.log(size);
		if (size == 1) break first;
	}
}