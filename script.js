'use strict';

var namber = 5;
//var - имя переменной и значение
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {  
};



console.log(4/0);
// this is undefined
console.log('string'*9);
//this is null. console shows NaN
let something;
console.log(something);
//this is undefined. something has no value
let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.name);
console.log(persone["age"]);

let arr = ['plum.png','orahge.jpg','apple.bmp'];

console.log(arr[0]);


//alert("Hello world!")

/*let ansver = confirm("Are you here?");
console.log(ansver)*/
//answer "ok"at console = true\answer "not" at console = false

//let ansver = +prompt("Есть ли Вам 18 лет?", "Да");
//console.log(ansver);

//console.log(typeof(ansver));
/*при указании команды typeof(ansver), в console выводится тип string.
ВЫВОД: все данные которые к нам приходят от пользователя выдодятся в виде строки (string)*/

//console.log(typeof(arr));
//в console отобразится тип object

//console.log(typeof(null));

//7ГЛ. ОПЕРАТОРЫ (+,-,*,/)
//Если сложить две переменные то в console выйдет строка (string)

/*console.log(typeof(null));
console.log("arr" + "-object");*/
//выйдет arr-object 

//console.log(4 + "-object");
// выйдет 4-object

//console.log(typeof(ansver));
//Однако если мы ставим + перед значением строки, то в console выйдет number

let incr = 10,
    decr = 10;

/*incr++;
decr--;

console.log(incr);
console.log(decr);*/
//Записывается так или как представлено ниже. Это префиксная форма, т.е. оператор ставится перед именем

/*console.log(++incr);
console.log(--decr);*/

console.log(incr++);
console.log(decr--);
//Значение изменяется только после того как его вернули нам

console.log(5%2)
// даное действие возвращает остаток от деления, ответ будет 1

/* = это присваивание как в переменных var namber = 5;
   == это проверка на равенство console.log("2" == 2); ответ будет true
   === это строгая проверка по типам данных console.log("2" === 2); ответ будет false, поскольку типы данных не совпадают (первый по типу это строка, второй число)
     */
console.log("2" == 2);
console.log("2" === 2);


/*let isChecked = true,
    isClose = true;

console.log(isChecked && isClose);*/
//& это знак "и" который может сравнивать значение разных переменных, ответ будет true, поскольку оба значения были true
//& если одно из значений будет true а второе false, ответ будет false

let isChecked = true,
    isClose = false;

console.log(isChecked || !isClose);
// || это знак "или" которая может сравнивать значение разных переменных, ответ будет true, поскольку один оба значения были true
// ||если оба значения будут false, ответ будет false
// ! оператор "отрицание", если оба значения будут false, ! меняет значение на противотоложное, ответ булет true, потому что значение isClose=false с помощью оператора ! поменялось на true


// Hello.

//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
