/*Вызов в контексте массива

Каков результат? Почему?
let arr = ["a", "b"];

arr.push(function() {
    alert( this );
});

arr[2](); // ?*/

/**Ответ: У массива в итоге 3 элемента: сначала их было 2, потом добавилась функция function(){...}.*/


