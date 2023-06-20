function add(...number){
    let sum = 0;
    for (let value of number) {
        sum += value;
    }
return sum;
}

function subtract(...number){
    let sum = 0;
    for (let value of number) {
        sum -= value;
    }
return sum;
}

function multiply(...number){
    let sum = 0;
    for (let value of nubmer){
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