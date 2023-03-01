//СИНТАКСИС

// Создание объекта

let userInfo = new Object(); // синтаксис "конструктор объекта"
let userInfo1 = {};  // синтаксис "литерал объекта"


//-----------------
// Свойства объектов. Ключ + значение

//У каждого свойства есть ключ
//(также называемый «имя» или «идентификатор»).
//После имени свойства следует двоеточие ":",
//и затем указывается значение свойства.
//Если в объекте несколько свойств,
//то они перечисляются через запятую.


let userInfo2 = {
	name: "Вася", // Свойство объекта
	age: 30, // Последняя (висячая) запятая
};

console.log(userInfo2);
console.log(userInfo2.name);

//---------------------------------------------

// Имена свойств

// Имя из двух и больше слов
let userInfo3 = {
	name: "Вася",
	age: 30,
	"likes javascript": true,
};
console.log(userInfo3.name);
console.log(userInfo3['name']);
console.log(userInfo3["likes javascript"]);


//-----------------
// Вычисляемое либо передаваемое имя

// Вычисляем имя
let firstPart = "likes";
let userInfo4 = {
	name: "Вася",
	age: 30,
	[firstPart + " javascript"]: true,
};
console.log(userInfo4["likes javascript"]);

//-----------------

// Передаем имя
let firstPart2 = "likes";
let userInfo5 = {
	name: "Вася",
	age: 30,
	[firstPart2]: true,
};
console.log(userInfo5[firstPart2]);

// Преимущество квадратных скобок
let key = "name";
console.log(userInfo5[key]);

//-----------------

// Зарезервированные слова в именах
let userInfo6 = {
	let: "Вася",
	for: 30,
};
console.log(userInfo6.let);
console.log(userInfo6.for);

//-----------------

// Имена = строки либо символы

let userInfo7 = {
	0: "Вася", // 0 тоже самое что "0"
};
console.log(userInfo7[0]);
console.log(userInfo7["0"]);

//-----------------

// Тип данных Symbol

// Создаём символ id с описанием (именем) "id"
let id = Symbol("id");
let userInfo8 = {
	name: "Вася",
	age: 30,
	[id]: "Некое значение"
};
console.log(userInfo8);

// Основное применение символов:
// 1.«Скрытые» свойства объектов
//		Символьное свойство не появится в for..in
// 2. Использование системных символов
// 	Symbol.iterator, Symbol.toPrimitive и т.д.

//---------------------------------------------

// Вложенность
let userInfo9 = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
console.log(userInfo9);
console.log(userInfo9.address);
console.log(userInfo9.address.city);

//---------------------------------------------

// Свойство из переменной

function makeUserInfo(name,age) {
	return {
		name: name,
		age: age,
		// ...другие свойства
	};
}
let user = makeUserInfo("Вася",30);
console.log(user);
//------------------

function makeUserInfo2(name,age) {
	return {
		name, // Тоже самое что и  name: name,
		age,// Тоже самое что и  age: age,
		"likes javascript": true,
		// ...другие свойства
	};
}
let user1 = makeUserInfo2("Вася",30);
console.log(user1);

//--------------------------------------------

// Изменение объекта

// Добавление свойства
let userInfo10 = {
	name: "Вася",
}

console.log(userInfo10);

userInfo10.age = 30;

console.log(userInfo10);

userInfo10['likes javascript'] = true;

console.log(userInfo10);

userInfo10.address = {
	city: "Uzhhorod",
	street: "Freedom",
};

console.log(userInfo10);

//------------------

// Удаление свойства

let userInfo11 = {
	name: "Вася",
	age: 30,
	"likes javascript": true
}
console.log(userInfo11);

delete userInfo11.age;

console.log(userInfo11);

delete userInfo11["likes javascript"];

console.log(userInfo11);

//------------------

// Изменение свойства

let userInfo12 = {
	name: "Вася",
	age: 30,
}
console.log(userInfo12);

userInfo12.age = 18;

console.log(userInfo12);

//------------------

// Изменение свойства даже в константе

const userInfo13 = {
	name: "Вася",
	age: 30,
}
console.log(userInfo13);

userInfo13.age = 18;

console.log(userInfo13);

//---------------------------------------------

// Копирование объектов

// При копировании объекта в другую переменную
// сам объект не дублируется, а копируется только ссылка на него

let userInfo14 = {
	name: "Вася",
	age: 30,
}

console.log(userInfo14);

let user2 = userInfo14;

console.log(user2);

user2.age = 18;

console.log(userInfo14);

//-------------------

// Дублирование объектов (Object.assign)

// Синтаксис
//Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...);

let userInfo15 = {
	name: "Вася",
	age: 30,
}

let user3 = Object.assign({},userInfo15);

user3.age = 18;

console.log(userInfo15);
console.log(user3);

//-------------------

// Object.assign можно добавлять новые свойства в объект
let userInfo16 = {
	name: "Вася",
	age: 30,
}
Object.assign(userInfo16,{ ['likes javascript']: true,city: "Uzhhorod" });
console.log(userInfo16);

//---------------------------------------------

// Проверка существования свойства

let userInfo17 = {
	name: "Вася",
	age: 30,
}
//console.log(userInfo.age);

if (userInfo17.age) { // true или false
	console.log(userInfo17.age);
}

//--------------------

// Опциональная цепочка

let userInfo18 = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
//console.log(userInfo.address.street);
console.log(userInfo18?.address?.street);

//--------------------

// Оператор "in"

let userInfo19 = {
	//name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
if ("name" in userInfo19) {
	console.log(userInfo19.name);
}

//--------------------

// Когда использовать оператор in?

//В большинстве случаев сработает сравнение с undefined.
//либо опциональная цепочка ?.
//Но есть особый случай, когда свойство существует,
//но содержит значение undefined.
//В этом случае необходимо использовать "in".


let userInfo20 = {
	name: undefined,
	// ...следующие свойства
}
if (userInfo20.name) { // false
	console.log(userInfo20.name);
}
if ("name" in userInfo20) { //true
	console.log(userInfo20.name);
}

//---------------------------------------------

// Цикл «for…in»

// Для перебора всех свойств объекта используется цикл for..in.
// Этот цикл отличается от изученного ранее цикла for(;;).

//for (let key in object) {
// тело цикла выполняется для каждого свойства объекта
//}

//-----------


let userInfo21 = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}

for (let key in userInfo21) {
	// ключи
	console.log(key); // name, age, address
	// значения ключей
	console.log(userInfo21[key]); // Вася, 30, Object {}
}

for (let key in userInfo21.address) {
	// ключи
	console.log(key); // city, street
	// значения ключей
	console.log(userInfo21.address[key]); // Uzhhorod, Freedom
}

//---------------------------------------------

// Методы объекта

let userInfo22 = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	//showInfo: function () {
	//console.log(`${userInfo22.name}, ${userInfo22.age} лет. Адрес: г.${userInfo22.address.city}, ул.${userInfo22.address.street}`);
	//}
	showInfo() { // Короткая запись
		console.log(`${userInfo22.name}, ${userInfo22.age} лет. Адрес: г.${userInfo22.address.city}, ул.${userInfo22.address.street}`);
	}
}
userInfo22.showInfo();


//----------------------
// Использование "this"

let userInfo23 = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		//console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
		console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
	}
}
userInfo23.showInfo();

//----------------------


//Пример this
let userInfo24 = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		//function show() {
		//	console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		//}

		// У стрелочной функции нет своего "this" используются
		// значение из внешнего метода userInfo.showInfo()
		let show = () => console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		show();
	}
}
userInfo24.showInfo();


//----------------------

// Преимущество "this"

let userInfo25 = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		//console.log(`${userInfo25.name}, ${userInfo25.age} лет. Адрес: г.${userInfo25.address.city}, ул.${userInfo25.address.street}`);
	}
}
userInfo25.showInfo();

let user4 = userInfo25;
userInfo25 = null;
user4.showInfo();

//---------------------------------------------

// Функция-конструктор

/*
Обычный синтаксис создания объекта{... } позволяет создать
только один объект. Но зачастую нам нужно создать множество
однотипных объектов, таких как пользователи, элементы меню и т.д.
Это можно сделать при помощи функции - конструктора и оператора "new".
*/
/*
Функции - конструкторы являются обычными функциями.
Но есть два правила:
1. Имя функции - конструктора должно начинаться с большой буквы.
2. Функция - конструктор должна вызываться при помощи
	оператора "new".
*/

function UserInfo(name) {

	// this = {}; Создается пустой объект (неявно)

	this.name = name;
	this.age = 30;

	// return this; Возвращается объект (неявно)
}

console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));

/*
Когда мы пишем наш код, используя объекты для представления сущностей реального мира,
– это называется объектно - ориентированное программирование или сокращённо: «ООП».

ООП является большой предметной областью и интересной наукой само по себе.
Как выбрать правильные сущности ? Как организовать взаимодействие между ними ?
Это – создание архитектуры, и есть хорошие книги по этой теме,
такие как «Приёмы объектно - ориентированного проектирования.
Паттерны проектирования» авторов Эрих Гамма, Ричард Хелм, Ральф Джонсон,
Джон Влиссидес или «Объектно - ориентированный анализ и проектирование с примерами приложений»
Гради Буча, а также ещё множество других книг.
*/

//========================================================================================================================================================
//========================================================================================================================================================

//ДОМАШКА
/*
Решить задачи:
*/
/*
// Задача №1 (верна ли запись) -нет, отсутсвуют запятые
const userInfo = {
	name: "Вася"
	age: 30
}
*/

// Задача №2 (что будет в консоли?)  - Значение свойства
let userInfo26 = {
	name: "Вася",
	age: 30,
	"58": 'Значение свойства'
}
console.log(userInfo26[58]);

// Задача №3 (что будет в консоли?) - 45
let userInfo27 = {
	name: "Вася",
	age: 30
}
let user5 = userInfo27;
user5.age = 45;

console.log(userInfo27.age);

// Задача №4 (что будет в консоли?) - Вася
let userInfo28 = {
	name: "Вася",
	age: 30,
	showInfo() {
		console.log(`${this.name}`);
	}
}
let user6 = userInfo28;
userInfo28 = null;
user6.showInfo();

// Задача №5 (что будет в консоли?) -	Вася
//													30
let userInfo29 = {
	name: "Вася",
	age: 30,
}
for (const key in userInfo29) {
	const value = userInfo29[key];
	console.log(value);
}

// Задача №6 (что будет в консоли?) - Uzhhorod
let userInfo30 = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod"
	}
}
for (const key in userInfo30.address) {
	console.log(userInfo30.address[key]);
}
/*
// Задача №7 (верна ли запись) - нет, правильно - console.log(userInfo31.["likes js"]);

const userInfo = {
	name: "Вася",
	age: 30,
	"likes js": true
}
console.log(userInfo."likes js");
*/
// Задача №8
/*
1.Создайте пустой объект userInfo.
2.Добавьте свойство name со значением Вася.
3.Добавьте свойство age со значением 30.
4.Измените значение свойства name на Лена.
5.Удалите свойство name из объекта.
*/

let userInfo31 = {};

userInfo31.name = "Вася";
console.log(userInfo31);

userInfo31.age = "30";
console.log(userInfo31);

userInfo31.name = "Лена";
console.log(userInfo31);

delete userInfo31.name;
console.log(userInfo31);