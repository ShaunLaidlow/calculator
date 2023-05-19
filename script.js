let firstNum = ""
let secondNum = ""
let operator = ""

function add(a,b){
    return Number(a) + Number(b);
}

function subtract(a,b){
    return Number(a) - Number(b);
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
            console.log("++++")
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
let enterSecondDigit = false
buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        //USER CLICKS CLEAR
        if(button.id == "clear"){
            console.log(`clear`)
            firstNum = ""
            operator = ""
            secondNum = ""
            current.textContent= ""
            previous.textContent= ""
            currentDisplay=""
            pastResults = ""
            enterSecondDigit = false
        }
        //USER CLICKS FIRST NUMBER
        else if(!button.classList.contains("operator") && operator == ""){
            previous.textContent = pastResults
            firstNum += button.textContent
            currentDisplay += button.textContent
            current.textContent = currentDisplay
            console.log(`first num = ${firstNum}`)
        }

        //FIRST OPERATOR SIGN
        else if(button.classList.contains("operator") && firstNum != "" && enterSecondDigit == false){
            operator = button.textContent
            currentDisplay += button.textContent
            current.textContent = currentDisplay
            console.log(`operator = ${operator}`)
        }

        //SELECT OPERATOR WITHOUT SELECT FIRST NUMBER
        else if(button.classList.contains("operator") && firstNum == ""){
            if(pastResults != ""){
                previous.textContent = pastResults
                firstNum += pastResults
                operator = button.textContent
                enterSecondDigit = false
                console.log(`first num = ${firstNum} and operator = ${operator}`)
                currentDisplay += firstNum
                currentDisplay += button.textContent
                current.textContent = currentDisplay
            }
            else{
                currentDisplay = "ERROR"
                current.textContent = currentDisplay
            }
        }

        //USER PRESSES EQUALS
        else if(button.classList.contains("equals")){
            let result = operate(firstNum,operator,secondNum);
            currentDisplay = result
            current.textContent = currentDisplay

            firstNum = ""
            operator = ""
            secondNum = ""
            pastResults = result
            currentDisplay=""
            console.log(`it equals = ${result}`)
        }

         
        //USER ENTERS SECOND OPERATOR
        else if(button.classList.contains("operator") && secondNum != ""){
            console.log("    ")
            console.log(firstNum)
            console.log(operator)
            console.log(secondNum)
            console.log("    ")
            firstNum = operate(firstNum,operator,secondNum);
            
            operator = button.textContent
            console.log(`first num = ${firstNum} operator = ${operator}`)
            secondNum = ""
            currentDisplay += button.textContent
            current.textContent = currentDisplay
            enterSecondDigit = false
        }

        //USER ENTERS SECOND NUMBER
        else if(!button.classList.contains("operator") && operator != ""){
            secondNum += button.textContent
            console.log(`second num = ${secondNum}`)
            currentDisplay += button.textContent
            current.textContent = currentDisplay
            enterSecondDigit = true;
        }

        
        

        

        
        
        else{
            alert("Error Will Robinson")
        }
        

        
        
    })
    
});