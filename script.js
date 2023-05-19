let firstNum = ""
let secondNum = ""
let operator = ""

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
        case "x":
            return multiply(firstNum,secondNum);
            break;
        case "÷":
            return divide(firstNum,secondNum);
            break;
        default:
            return "Uh Oh"
    }
}

buttons = document.querySelectorAll("button");
current = document.querySelector(".current")
previous = document.querySelector(".previous")
let pastResults = ""
let currentDisplay = ""
buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        
        if(button.id == "clear"){

            firstNum = ""
            operator = ""
            secondNum = ""
            current.textContent= ""
            previous.textContent= ""
            currentDisplay=""
            pastResults = ""
        }
        else if(!button.classList.contains("operator") && operator == ""){
            console.log("first")
            previous.textContent = pastResults
            firstNum += button.textContent
            currentDisplay += button.textContent
            current.textContent = currentDisplay
        }
        else if(button.classList.contains("operator") && firstNum != ""){
            console.log("oppo")
            operator = button.textContent
            currentDisplay += button.textContent
            current.textContent = currentDisplay
        }
        else if(button.classList.contains("operator") && firstNum == ""){
            console.log("second oppo")
            if(pastResults != ""){
                previous.textContent = pastResults
                firstNum += pastResults
                operator = button.textContent
                currentDisplay += firstNum
                currentDisplay += button.textContent
                current.textContent = currentDisplay
            }
        }
        else if(button.classList.contains("equals")){
            console.log("eqs")
            let result = operate(firstNum,operator,secondNum);
            currentDisplay = result
            current.textContent = currentDisplay

            firstNum = ""
            operator = ""
            secondNum = ""
            pastResults = result
            currentDisplay=""
        }
        else if(!button.classList.contains("operator") && operator != ""){
            console.log("sec")
            secondNum += button.textContent
            currentDisplay += button.textContent
            current.textContent = currentDisplay
            
        }
        
        else{
            alert("Error Will Robinson")
        }
        

        
        
    })
    
});