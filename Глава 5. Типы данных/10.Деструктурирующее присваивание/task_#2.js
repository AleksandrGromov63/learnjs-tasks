/*Максимальная зарплата

У нас есть объект salaries с зарплатами:*/

    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };
/*Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.*/

/**Ответ ниже*/

function topSalary(salaries) {

    let max = 0;
    let name = null;

    for(const [tempName, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            name = tempName;
        }
    }
    return name;
}