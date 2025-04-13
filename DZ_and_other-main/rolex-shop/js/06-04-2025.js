// +

function calclulate(){
    let result = NaN;
    switch(sign){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
       case "*":
           result = num1 * num2;
           break;
        case "/":
             if (0 != num2) result = num1 / num2; 
             break;
         default:
             alert("Неизвестная опкрация!")
             break;
    }
    return result;
}

function calclulator() {
    if (!confirm('Запустить калькулятор?')) return false;

    let num1, num2, sign, result = NaN, a = 0;

    num1 = Number(prompt('введите первое число:','0'));
    num2 = Number(prompt('введите первое число:','0'));
    sign = prompt('введите действие(+,-,*,/):','+');
    
    result = calclulate(num1,num2,sign);

if(isNaN(result)){
    alert("Некоректный ввод!")
} else {
    alert(`Ответ: ${result}`)
}
return true;
}

let stat = true;
while (stat) stat = calclulator(); 
