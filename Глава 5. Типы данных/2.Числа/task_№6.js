/*Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
Любое число из интервала min..max должно появляться с одинаковой вероятностью.*/

/** Ответ ниже */

function randomInteger(min, max) {

    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}

alert( randomInteger(1, 3) );