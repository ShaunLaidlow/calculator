let firstNum
let secondNum
let operator

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(firstNum,operator, secondNum){
    switch(operator){
        case "+":
            return add(firstNum,secondNum);
            break;
        case "-":
            return subtract(firstNum,secondNum);
            break;
        case "*":
            return multiply(firstNum,secondNum);
            break;
        case "/":
            return divide(firstNum,secondNum);
            break;
        default:
            return "Uh Oh"
    }
}