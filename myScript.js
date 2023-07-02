//Arithmetic assignments (-=, +=, etc) will evaluate the right side of the equation first before using the operand left of the equation.
function add(number1, number2){
    //The arguments are still strings, so they need to be converted to numbers for calculations.
        displayNum = Number.parseFloat(number1) + Number.parseFloat(number2);
        //Clear out 'operand' and 'nextNumber' for further entries.
        operand = "";
        nextNumber = "";
        return total = Number.parseFloat(number1) + Number.parseFloat(number2);
    }

function subtract(number1, number2){
        displayNum = number1 - number2;
        operand = "";
        nextNumber = "";
        return total = number1 - number2;
    }

function multiply(number1, number2){
        displayNum = number1 * number2;
        operand = "";
        nextNumber = "";
        return total = number1 * number2;
    }

function divide(number1, number2){
    //If the number is used as the divisor, check for zero.
    if (number2 == 0){
        console.log("Cannot divide by zero!");
        return display.textContent = "What the f#@#!";
    }
    else {
        displayNum = number1 / number2;
        operand = "";
        nextNumber = "";
        return total = number1 / number2;
    }
    //else divide some stored value by "number."
}

function getNumber(numberSelected){
    if(!isNaN(firstNumber) && operand){
        nextNumber += numberSelected;
        displayNum = nextNumber;
        display.textContent = displayNum; 
    }
    else {
        firstNumber == 0 ? firstNumber = numberSelected : firstNumber += numberSelected;
    }
    console.log(firstNumber, nextNumber);
}

function setOperand(pressedKey){
    switch(pressedKey){
        case "+":
            operand = "+";
            break;
        case "-":
            operand = "-";
            break;
        case "*":
            operand = "*";
            break;
        case "/":
            operand = "/";
            break;
        default:
            console.log("No matches.");
    }
}

function getKey(keyDetails){
    console.log(keyDetails);
    if (!isNaN(keyDetails.key)){
        getNumber(keyDetails.key);
    }
    //If keyDetails.key is not an integer and userNumber has a value, perform a switch case to determine what operand should be set to via the setOperand function.
    else if (firstNumber || firstNumber == 0){
        setOperand(keyDetails.key);
    }
}

function operate(operand, number1, number2){
    switch(operand){
        case "+":
            return display.textContent = add(number1, number2);
        case "-":
            return display.textContent = subtract(number1, number2);
        case "*":
            return display.textContent = multiply(number1, number2);
        case "/":
            return display.textContent = divide(number1, number2);
        default:
            console.log("Error");
    }
}

//Update display when a button is clicked
function updateDisplay(buttonClicked){
    console.log(buttonClicked.target.innerText);
    if (!isNaN(buttonClicked.target.innerText)){
        //A calculator's display will show the number "0" on startup and will not change if the number "0" is selected on the keypad.
        //This checks to see if the display number is "0." If it is, set the display to whatever number is clicked. 
        displayNum == 0 ? displayNum = buttonClicked.target.innerText : displayNum += buttonClicked.target.innerText;
        getNumber(buttonClicked.target.innerText);
        return display.textContent = displayNum;
    }
    else if (/[+*/=-]/.test(buttonClicked.target.innerText) && firstNumber){
        console.log("You Chose: ", buttonClicked.target.innerText);
        if (buttonClicked.target.innerText == "=" && operand && firstNumber && nextNumber) {
            //For the second arguement: If 'total' has a value, then use that in lieu of 'firstNumber' which does not change after a value is assigned to it or if it's cleared with 'clear()'. 
            operate(operand, (total != null && !isNaN(total)) ? total : firstNumber, nextNumber);
        }
        else {
            setOperand(buttonClicked.target.innerText);
        }
    }
}

//Going to need a function that resets the values provided by the user.
// function clear()

//Global variable that can be accessed by each of the functions and keeps track of the total.
let total = null;

//Track intermediate values.
let displayNum = "0";

//Listen for keyboard inputs to retrieve and store numbers and operand. Initializing userNumber variables to "" to perform string concatenation with key values retreived from keydown event
//, which are strings.
let firstNumber = "";
let nextNumber = "";
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
