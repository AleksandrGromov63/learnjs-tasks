/*Перебираемые ключи

Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

Но это не выходит:
*/
let map = new Map();

map.set("name", "John");

//let keys = map.keys(); <------------здесь ошибка

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
//Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?


/**Ответ ниже*/
let keys = Array.from(map.keys());
keys.push("more");