// TODO: Determine how to deal with floating point numbers (floating-point-gui). For example, the subtraction of 5.2 - 1.5 yields 3.7 as expected. However 5.2 - 1.4 yields 3.800000003.
// TODO: Find a way to deal with answers that are larger than the display window.

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
        nextNumber = "";
        return display.textContent = "(x_x) no / 0";
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
        if (!nextNumber.includes(".")){
        dotButton.removeAttribute("disabled");
        }
        nextNumber == "0" ? nextNumber = numberSelected : nextNumber += numberSelected;
        displayNum = nextNumber;
        display.textContent = displayNum; 
    }
    else {
        firstNumber == "0" ? firstNumber = numberSelected : firstNumber += numberSelected;
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
    dotButton.setAttribute("disabled", true);
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
    // console.log(buttonClicked.target.innerText);
    // Checks 'clientWidth' and 'scrollWidth' HTML DOM Element properties as a way to restrict the amount of characters in the display by comparing the width of the div relative to its content.
   
    if (!isNaN(buttonClicked.target.innerText)){
        if (document.querySelector("#display").clientWidth < document.querySelector("#display").scrollWidth && !operand){
            console.log("It's too much!!!");
            return;
        }
    
        //A calculator's display will show the number "0" on startup and will not change if the number "0" is selected on the keypad.
        //This checks to see if the display number is "0." If it is, set the display to whatever number is clicked. 
        //displayNum and others were changed from the digit 0 to the string '0' because '0' == '0.' is true but 0 == '0.' is false.
        displayNum == "0" ? displayNum = buttonClicked.target.innerText : displayNum += buttonClicked.target.innerText;
        getNumber(buttonClicked.target.innerText);
        return display.textContent = displayNum;
    }
    else if (/[-+*/=\\.]/.test(buttonClicked.target.innerText) && firstNumber){
        if (buttonClicked.target.innerText == "=" && operand && firstNumber && nextNumber) {
            //For the second arguement: If 'total' has a value, then use that in lieu of 'firstNumber' which does not change after a value is assigned to it or if it's cleared with 'clear()'. 
            operate(operand, (total != null && !isNaN(total)) ? total : firstNumber, nextNumber);
        }
        else if (buttonClicked.target.innerText == "." && (firstNumber || total == 0))
        {
            if (!nextNumber){
                firstNumber += ".";
                dotButton.setAttribute("disabled", true);
                displayNum = firstNumber;
                display.textContent = displayNum;
            }
            else {
                nextNumber+= ".";
                dotButton.setAttribute("disabled", true);
                displayNum = nextNumber;
                display.textContent = displayNum;   
            }
        }
        else {
            setOperand(buttonClicked.target.innerText);
        }
    }
}

//Resets calculator's variables to their inital values. Similar to hitting the 'C,' or Clear, button on a calculator. 
function clear(){
    total = null;
    displayNum = "0";
    display.textContent = displayNum;
    firstNumber = "";
    nextNumber = "";
    operand = null;
    dotButton.removeAttribute("disabled");
}

function clearNumber(){
    if (total && nextNumber){
        nextNumber = nextNumber.substring(0, nextNumber.length - 1);
        if (!nextNumber.includes(".")){
            dotButton.removeAttribute("disabled");
        }
        nextNumber == "" ? displayNum = "" : displayNum = nextNumber;
        display.textContent = displayNum;
    }
    else if (!total && firstNumber){
        firstNumber = firstNumber.substring(0, firstNumber.length - 1);
        //Reneable '.' if it is removed.
        if (!firstNumber.includes(".")){
            dotButton.removeAttribute("disabled");
        }
        firstNumber == "" ? displayNum = "" : displayNum = firstNumber;
        display.textContent = displayNum;
    }
    else if (nextNumber){
        nextNumber = nextNumber.substring(0, nextNumber.length - 1);
        if (!nextNumber.includes(".")){
            dotButton.removeAttribute("disabled");
        }
        nextNumber == "" ? displayNum = "" : displayNum = nextNumber;
        display.textContent = displayNum;
    }
    operand = "";
}

//Variable that keeps track of the total.
let total = null;

//Track intermediate values.
let displayNum = "0";

//Listen for keyboard inputs to retrieve and store numbers and operand. Initializing userNumber variables to "" to perform string concatenation with key values retreived from keydown event
//, which are strings.
let firstNumber = "";
let nextNumber = "";
let operand = null;

// Button for '.'
const dotButton = document.querySelector("#numpad").lastElementChild.firstElementChild.nextElementSibling;

//Add 'keydown' event listener which then runs the 'getKey' function.
document.addEventListener("keydown", getKey);

display.textContent = displayNum;

// Add event listeners to all buttons
const numberButtons = document.querySelectorAll(".number button");

//Add event listener to the 'C' button.
document.querySelector("#clear button").addEventListener("click", clear);

document.querySelector("#clear button").nextElementSibling.addEventListener("click", clearNumber);

numberButtons.forEach((button) => {
    button.addEventListener("click", updateDisplay);
})
