/*Напишите код, который будет спрашивать логин с помощью prompt.
Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено»,
в противном случае отобразить «Я вас не знаю».

Пароль проверять так:
Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Здравствуйте!»,
При отмене – «Отменено».

Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.

Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.*/

let login = prompt("Кто там?", "");

if (login === "Админ") {

    let password = prompt("Пароль?", "");

    if (password === "Я главный") {
        alert("Здравствуйте!");
    } else if (password === null || password === "") {
        alert("Отменено")
    } else {
        alert('Неверный пароль');
    }
} else if (login === "" || login === null) {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}