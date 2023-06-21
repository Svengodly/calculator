function add(number1, number2){
    //The arguments are still strings, so they need to be converted to numbers for calculations.
    total += Number.parseInt(number1) + Number.parseInt(number2);
return total;
}

function subtract(...number){
    let sum = number[0];
    for (let value of number) {
        sum -= value;
    }
return sum;
}

function multiply(...number){
    let sum = 0;
    for (let value of number){
        sum *= value
    }
return sum;
}

function divide(...number){
    //If the number is used as the divisor, check for zero.
    if (number == 0){
        return console.log("Cannot divide by zero!");
    }
    //else divide some stored value by "number."
return;
}

function getNumber(numberPressed){
    console.log("Twas a number!")
    if (userNumber1 && operand != undefined){
        userNumber2 += numberPressed;  
        add(userNumber1, userNumber2); 
    }
    else {
        userNumber1 += numberPressed;
    }
}

function getKey(keyDetails){
    console.log(keyDetails);
    if (Number.parseInt(keyDetails.key)){
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

//Going to need a function that resets the values provided by the user.
// function clear()

//Global variable that can be accessed by each of the functions and keeps track of the total sum: "total"
let total = null;

//Listen for keyboard inputs to retrieve and store numbers and operand. Initializing userNumber variables to "" to perform string concatenation with key values retreived from keydown event
//, which are strings.
let userNumber1 = "";
let userNumber2 = "";
let operand;

document.addEventListener("keydown", getKey);