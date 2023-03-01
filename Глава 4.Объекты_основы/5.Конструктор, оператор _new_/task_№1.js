/*
Две функции - один объект
Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Если да – приведите пример вашего кода.*/

/** Ответ: Да,может. Решение ниже*/
let object = {};

function A() { return object; }
function B() { return object; }
