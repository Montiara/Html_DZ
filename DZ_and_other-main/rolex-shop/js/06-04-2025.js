// +

let num1, num2, sign, result = NaN;

num1 = Number(prompt('введите первое число:','0'));
num2 = Number(prompt('введите первое число:','0'));
sign = prompt('введите действие(+,-,*,/):','+');

switch(sign){
    case "":
        result = num1 + num2;
        break;
    case "":
        result = num1 - num2;
        break;
    case "":
        result = num1 * num2;
        break;
    case "":
        result = num1 / num2;
        break;
    default:
        alert("Неизвестная опкрация!")
        break;
}

if(isNaN(result)){
    alert("Некоректный ввод!")
} else {
    alert(`Ответ: ${result}`)
}