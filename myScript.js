//Arithmetic assignments (-=, +=, etc) will evaluate the right side of the equation first before using the operand left of the equation.
function add(number1, number2){
    //The arguments are still strings, so they need to be converted to numbers for calculations.
        return total = Number.parseInt(number1) + Number.parseInt(number2);
    }

function subtract(number1, number2){
        return total = number1 - number2;
    }

function multiply(number1, number2){
        return total = Number.parseInt(number1) * Number.parseInt(number2);
    }

function divide(number1, number2){
    //If the number is used as the divisor, check for zero.
    if (number2 == 0){
        console.log("Cannot divide by zero!");
        return display.textContent = "What the f#@#!";
    }
    else {
        return total = number1 / number2;
    }
    //else divide some stored value by "number."
}

function getNumber(numberSelected){
    if(Number.isInteger(Number.parseInt(userNumber1)) && operand){
        userNumber2 += numberSelected;
        display.textContent= operate(operand, userNumber1, userNumber2); 
    }
    else {
        userNumber1 += numberSelected;
    }
    console.log(userNumber1, userNumber2);
}

function setOperand(pressedKey){
    switch(pressedKey){
        case "+":
            operand = "+";
            if (total || total == 0){
                //Retain the result of the displayed value and the most recent value used in the eqaution.
                userNumber1 = total;
                userNumber2 = "";
            };
            break;
        case "-":
            operand = "-";
            if (total || total == 0){
                // displayNum = displayNum - userNumber2;
                userNumber1 = total;
                userNumber2 = "";
            }
            break;
        case "*":
            operand = "*";
            if (total || total == 0){
                userNumber1 = total;
                userNumber2 = "";
            };
            break;
        case "/":
            operand = "/";
            if (total || total == 0){
                userNumber1 = total;
                userNumber2 = "";
            };
            break;
        default:
            console.log("No matches.");
    }
}

function getKey(keyDetails){
    console.log(keyDetails);
    if (Number.isInteger(Number.parseInt(keyDetails.key))){
        getNumber(keyDetails.key);
    }
    //If keyDetails.key is not an integer and userNumber has a value, perform a switch case to determine what operand should be set to via the setOperand function.
    else if (userNumber1 || userNumber1 == 0){
        setOperand(keyDetails.key);
    }
}

function operate(operand, number1, number2){
    switch(operand){
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
        default:
            console.log("Error");
    }
}

//Update display when a button is clicked
function updateDisplay(buttonClicked){
    console.log(buttonClicked.target.innerText);
    if (displayNum == 0 && buttonClicked.target.innerText == 0){
        return;
    }
    else if (Number.isInteger(Number.parseInt(buttonClicked.target.innerText))){
        //A calculator's display will show the number "0" on startup and will not change if the number "0" is selected on the keypad.
        //This checks to see if the display number is "0." If it is, set the display to whatever number is clicked. 
        displayNum == 0 ? displayNum = buttonClicked.target.innerText : displayNum += buttonClicked.target.innerText;
        return display.textContent = displayNum;
    }
}

//Going to need a function that resets the values provided by the user.
// function clear()

//Global variable that can be accessed by each of the functions and keeps track of the total total: "total"
let total = "0";

//Track intermediate values.
let displayNum = "0";

//Listen for keyboard inputs to retrieve and store numbers and operand. Initializing userNumber variables to "" to perform string concatenation with key values retreived from keydown event
//, which are strings.
let userNumber1 = "";
let userNumber2 = "";
let operand = null;

document.addEventListener("keydown", getKey);
// const display = document.createElement("p");
// const display = document.querySelector("#display").textContent = total;
display.textContent = displayNum;
// document.body.appendChild(display);

// Add event listeners to all buttons
const numberButtons = document.querySelectorAll(".number button");

numberButtons.forEach((button) => {
    button.addEventListener("click", updateDisplay);
})
