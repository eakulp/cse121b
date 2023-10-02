/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers () {
    let add1 = Number(document.getElementById("add1").value);
    let add2 = Number(document.getElementById("add2").value);
    document.getElementById("sum").value = add(add1, add2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const Subtract = function (number1, number2){
    return number1 - number2;
}

const subtractNumbers = function () {
    let subtract1 = Number(document.getElementById("subtract1").value);
    let subtract2 = Number(document.getElementById("subtract2").value);
    document.getElementById("difference").value = Subtract(subtract1, subtract2);
}
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.getElementById("factor1").value);
    let factor2 = Number(document.getElementById("factor2").value);
    document.getElementById("product").value = multiply(factor1, factor2);
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    if (divisor === 0) {
        return "Cannot divide by zero";
    }
    return dividend / divisor;
}

function divideNumbers() {
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.getElementById("divisor").value);
    let result = divide(dividend, divisor);
    document.getElementById("quotient").value = result;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
let today = new Date();
let currentYear = "";
currentYear = today.getFullYear();
document.getElementById("year").textContent = currentYear;

document.getElementById("year").textContent = new Date().getFullYear();

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").textContent = numbersArray.join(", ");

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(function (number) {
    return number % 2 === 1;
});
document.getElementById("odds").textContent = oddNumbers.join(", ");

/* Output Evens Only Array */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
let evenNumbers = numbersArray.filter(function (number) {
    return number % 2 === 0;
});
document.getElementById("evens").textContent = evenNumbers.join(", ");

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(function (number) {
    return number * 2;
});
document.getElementById("multiplied").textContent = multipliedArray.join(", ");

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
