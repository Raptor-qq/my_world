//Применение оператора сложения к строкам
let resultOne = "Фрилансер" + " " + "по" + " " + "жизни";
console.log(resultOne);

//Если в выражении есть строка, то есть если хотя бы
//один операнд будет строкой, то конечный результат
//тоже будет строкой
let resultTwo = "Фрилансер " + 58;
console.log(resultTwo,typeof resultTwo);

//Порядок значения не имеет
let resultThree = 58 + " Фрилансер";
console.log(resultThree);

//Казусы
let resultFour = 2 + "2";
console.log(resultFour);

//Операции до сложения со строкой
//выполняются как обычно
let resultFive = 58 - 20 + " Фрилансер";
console.log(resultFive);

//Работа других операторов
let result1 = "25" - 5;
console.log(result1);
console.log(typeof result1);

//или

let result2 = 10 * "80";
console.log(result2);
console.log(typeof result2);

//Недопустимая операция
let result3 = 3 * "Фрилансер";
console.log(result3); //Вернет NaN
console.log(typeof result3);

//Унарный оператор сложения +
//Со строками
let result4 = +"25";
console.log(result4,typeof result4);

//С числами
let result5 = +10;
console.log(result5,typeof result5);

let users = "25";
let admins = "10";
console.log(users + admins);

console.log(+users + +admins);

//Более длинная запись
console.log(Number(users) + Number(admins));

//Оператор присваивания
let a = 1 + 2;
let b = 2;

let result = 8 - (a = b + 3);
console.log("Результат в скобках: " + a);
console.log("Общий результат: " + result);

//Присваивание по цепочке
let result7;
let result8;
let result6 = result7 = result8 = 1 + 2;
console.log(result6);
console.log(result7);
console.log(result8);

//Сокращённая запись вычислений с присваиванием

let users1 = 5;
users1 = users1 + 3;
users1 = users1 * 2;

//Можно записать так:

let users2 = 5;
console.log(users2);
users2 += 3;
console.log(users2);
users2 *= 2;
console.log(users2);


let users3 = 5;
console.log(users3);
users3 += 1 + 2;
console.log(users3);

//Инкремент ++
let addUser = 2;
addUser++;
console.log(addUser);


//Работает так же как и
addUser = addUser + 1;
//или
addUser += 1;


//Декремент --
let removeUser = 2;
removeUser--;
console.log(removeUser);

//Инкремент / декремент можно применить только к переменной.
//Попытка использовать его на значении, типа 5++, приведёт к ошибке.

//console.log(5++);

//Операторы++ и-- могут быть расположены
//не только после, но и до переменной.

//Постфиксная форма
//usersCounter++;
//usersCounter--;

//Префиксная форма
//++usersCounter;
//--usersCounter;

let usersCounter1 = 0;
let newUsers1 = usersCounter1++;
console.log(newUsers1);

//Префиксная форма
let usersCounter2 = 0;
let newUsers2 = ++usersCounter2;
console.log(newUsers2);

/*
Итого, если результат оператора не используется, а нужно только
увеличить / уменьшить переменную, тогда без разницы,
какую форму использовать:

let usersCounter = 0;
++usersCounter;
console.log(usersCounter);
*/

/*
Если хочется тут же использовать
результат, то нужна префиксная форма:

let usersCounter = 0;
console.log(++usersCounter);
*/


/*
Если нужно увеличить и при этом
получить значение переменной
до увеличения – нужна постфиксная форма:

let usersCounter = 0;
console.log(usersCounter++);
console.log(usersCounter);
*/

//инкремент / декремент можно
//использовать в любых выражениях.
//При этом их приоритет будет выше,
//чем у большинства других арифметических операций:

let usersCounter3 = 0;
let newUsers = 2 * ++usersCounter3;
console.log(newUsers);

//Оператор запятая


//Предоставляет нам возможность вычислять несколько выражений,
//разделяя их запятой ,. Каждое выражение выполняется,
//но возвращается результат только последнего.


let usersCounter4 = (8 + 2,19 + 1);
console.log(usersCounter4);

//Побитовые операторы

/*
AND(и) ( & )
OR(или) ( | )
XOR(побитовое исключающее или) ( ^ )
NOT(не) ( ~ )
LEFT SHIFT(левый сдвиг) ( << )
RIGHT SHIFT(правый сдвиг) ( >> )
ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )
*/

//=============================================================================

//Операторы сравнения
/*
Больше: a > b
Меньше: a < b
Больше или равно: a >= b
Меньше или равно: a <= b
Равно: a == b
Не равно: a != b
Строгое равно: a === b
Строгое не равно: a !== b
*/

/*
Операторы сравнения возвращают логический
тип данных со значением true или false:
*/

console.log(2 > 1);
console.log(4 < 2);
console.log(58 == 36);
console.log(8 != 9);

//Присваиваем результат переменной

let result9 = 11 > 10;
console.log(result9);

//Сравнение строк

//Алфавитный порядок
console.log('Б' > 'А');

//Алфавитный порядок
console.log('Скрипт' > 'Скрипка');

//Кол-во символов
console.log('Слайдер' > 'Слайд');

//Регистр
console.log('Фрилансер' > 'фрилансер');

/*
Алгоритм сравнения двух строк довольно прост:
1.	Сначала сравниваются первые символы строк.
2.	Если первый символ первой строки больше(меньше),
	чем первый символ второй, то первая строка
	больше(меньше) второй.Сравнение завершено.
3.	Если первые символы равны, то таким же образом
	сравниваются уже вторые символы строк.
4.	Сравнение продолжается, пока не закончится одна из строк.
5.	Если обе строки заканчиваются одновременно,
	то они равны.Иначе, большей считается более длинная строка.
*/

//Сравнение разных типов

//Преобразование в число
console.log('58' > 10);
console.log('007' == 7);

//Логическое значение true становится 1, а false – 0.
console.log(true == 1);
console.log(false == 0);


//Интересные ситуация
let itemA = 0;
let itemB = "0";

console.log(Boolean(itemA));
console.log(Boolean(itemB));

console.log(itemA == itemB);

//Ноль равен false
console.log(0 == false);

//Строгое сравнение

/*
оператор строгого равенства или не равенства
проверяет равенство без приведения типов.
*/
console.log(0 === false);
console.log('007' === 7);
console.log('58' !== 58);

//Строгое равенство
console.log(null === undefined);

//Не строгое равенство
console.log(null == undefined);


//Операторы сравнения

//Сравнение с null и undefined

//Сравнение null и 0
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


//Сравнение undefined и 0
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

/*
Что бы избежать проблем при сравнении нужно очень
осторожно относиться к любому сравнению с undefined / null,
кроме случаев строгого равенства ===.
Не использовать сравнения >= > < <= с переменными,
которые могут принимать значения null / undefined,
разве что ты точно знаешь что делаешь.В любом случае,
если переменная может принимать эти значения,
то стоит добавить для них отдельные проверки.
*/

//============================================

//Логические операторы

//Существуют три логических оператора:
/*
ИЛИ: ||
И: &&
НЕ: !
*/

/*
//Оператор || (ИЛИ)

Оператор ИЛИ, записывается как две вертикальные черты.
Процесс его работы следующий:
1.	Вычисляет операнды слева направо.
2.	Каждый операнд конвертирует в логическое значение.
	Если результат true, останавливается и возвращает
	исходное значение этого операнда.
3.	Если все операнды являются ложными(false), возвращает
	значение последнего из них.
*/

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

//Разные типы

//Первый true это 1
console.log(1 || 0);
//Первый true это true
console.log(true || 'фрилансер');
//Первый true это 58
console.log(null || 58);
//Первый true это фрилансер
console.log(null || 'фрилансер' || 0);
//true нет совсем, вернет последнее значение - 0
console.log(undefined || '' || null || 0);

//Присвоение значения в переменную

let userName8 = '';
let userNickName = '';

let user2 = userName8 || userNickName || "";
console.log(user2);

//Cокращённое вычисление. Условие.
let admins1 = 10;
let users4 = 5;
admins1 > users4 || users4++;
console.log(users4);

/*
Сдледующий логический оператор это И. Пишется как два
амперсанда && выполняет следующие действия:
1.	Вычисляет операнды слева направо.
2.	Каждый операнд преобразует в логическое значение.
	Если результат false, останавливается и возвращает исходное
	значение этого операнда.
3.	Если все операнды были истинными, возвращает значение
	последнего.
*/

//Булевые значения
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

//Разные типы

//Пример 1. 0 - false
console.log('Фрилансер' && 0 && 2 && 3);
//Пример 2. null - false
console.log(1 && 2 && null && 3);
//Пример 3. Все true
console.log('15' && '42');

//Приоритет && больше чем ||
console.log(1 && 0 || 2 && 1);

//Подобие условия
let users9 = 1;
(users9 > 0) && console.log(`Пользователей ${users9}`);

//Оператор ! (НЕ)

//Оператор ! (НЕ)
/*
Выполняет следующие действия:
1. Сначала приводит аргумент к логическому типу true / false.
2. Затем возвращает противоположное значение.
*/

//Булевые значения
console.log(!true);

//Разные типы
console.log(!null);
console.log(!1);
console.log(!'');
console.log(!'фрилансер');

/*
Приоритет НЕ ! является наивысшим из всех логических операторов,
поэтому он всегда выполняется первым, перед && или ||.
*/
console.log(!true && 58 || 18 && !1);

//Используется для преобразования типа в boolean
console.log(!!'фрилансер');
//или
console.log(Boolean('фрилансер'));

//Оператор объединения с null (??)

/*
Оператор ?? возвращает первый аргумент,
если он не null / undefined, иначе второй.
*/

let name1;
console.log(name1 ?? "Без имени");

// Какой или какие из вариантов не верны:

//Вариант №1
console.log('35' + - "22");
//Вернет 13 - НЕ ВЕРНО (35-22)

//Вариант №2
console.log('35' * "22");
//Вернет 770 - ВЕРНО

//Вариант №3
//console.log('558' > 2++);
//Вернет true - НЕ ВЕРНО (Error)

//Вариант №4
let usersCounter = 0;
let newUsers3 = usersCounter++;
console.log(newUsers3);
//Вернет 1 - НЕ ВЕРНО (0)

//Вариант №5
console.log(!false && 11 || 18 && !'');
//Вернет 18 - НЕ ВЕРНО (11)

//Вариант №6
let name3 = 0;
console.log(name3 ?? "Без имени")
// Вернет 0 - ВЕРНО

console.log('15' && '42');