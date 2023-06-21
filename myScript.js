//Arithmetic assignments (-=, +=, etc) will evaluate the right side of the equation first before using the operand left of the equation.
function add(number1, number2){
    //The arguments are still strings, so they need to be converted to numbers for calculations.
    if (total == undefined)
    {
        total = Number.parseInt(number1) + Number.parseInt(number2);
    }
    total = total + Number.parseInt(number1) + Number.parseInt(number2);
return total;
}

function subtract(number1, number2){
    if (total == undefined){
        total = Number.parseInt(number1) - Number.parseInt(number2);
    }
    else {
        total = total - Number.parseInt(number1) - Number.parseInt(number2);
        console.log(total);
    }
return total;
}

function multiply(number1, number2){
    if (total == undefined){
        total = Number.parseInt(number1) * Number.parseInt(number2);
    }
    total = total * Number.parseInt(number1) * Number.parseInt(number2);
return total;
}

function divide(number1, number2){
    //If the number is used as the divisor, check for zero.
    if (number == 0){
        return console.log("Cannot divide by zero!");
    }
    //else divide some stored value by "number."
return;
}

function getNumber(numberPressed){
    console.log("Twas a number!")
    //The Number.isInteger and Number.parseInt is used to deal with 0 being a falsy value.
    if (Number.isInteger(Number.parseInt(userNumber1)) && operand){
        userNumber2 += numberPressed;
        //Need to make the code determine whether to perform addition, subtraction, multiplication, or division.  
        operate(operand, userNumber1, userNumber2); 
    }
    else {
        userNumber1 += numberPressed;
    }
}

function getKey(keyDetails){
    console.log(keyDetails);
    if (Number.isInteger(Number.parseInt(keyDetails.key))){
        getNumber(keyDetails.key);
    }
    //If keyDetails.key is not an integer and userNumber has a value, perform a switch case to determine what operand should be set to.
    else if (userNumber1){
        switch(keyDetails.key){
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
}

function operate(operand, number1, number2){
    switch(operand){
        case "+":
            add(number1, number2);
            break;
        case "-":
            subtract(number1, number2);
            break;
        case "*":
            multiply(number1, number2);
            break;
        case "/":
            divide(number1, number2);
            break;
        default:
            console.log("Error");
    }
}
//Going to need a function that resets the values provided by the user.
// function clear()

//Global variable that can be accessed by each of the functions and keeps track of the total total: "total"
let total = null;

//Listen for keyboard inputs to retrieve and store numbers and operand. Initializing userNumber variables to "" to perform string concatenation with key values retreived from keydown event
//, which are strings.
let userNumber1 = "";
let userNumber2 = "";
let operand = null;

document.addEventListener("keydown", getKey);
