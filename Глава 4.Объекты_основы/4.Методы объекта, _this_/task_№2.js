/*Создайте объект calculator (калькулятор) с тремя методами:
read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат*/

let calculator = {
    sum() {
        return this.first + this.second;
    },

    mul() {
        return this.first * this.second;
    },

    read() {
        this.first = +prompt('Введите первое число', '0');
        this.second = +prompt('Введите второе число', '0');
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );