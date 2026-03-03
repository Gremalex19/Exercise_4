//Part 1


const num1 = 10;
const num2 = 5;


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


const sumResult = add(num1, num2);
const subResult = subtract(num1, num2);
const multResult = multiply(num1, num2);
const divResult = divide(num1, num2);


console.log(`The result of ${num1} + ${num2} is ${sumResult}.`);
console.log(`The result of ${num1} - ${num2} is ${subResult}.`);
console.log(`The result of ${num1} * ${num2} is ${multResult}.`);
console.log(`The result of ${num1} / ${num2} is ${divResult}.`);

//Part 2

const numA = 10;
const numB = 0; 

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;


const divide = (a, b) => {
    if (b === 0) {
        return "Error: Cannot divide by zero"; 
    }
    return a / b;
};

console.log(`The result of ${numA} + ${numB} is ${add(numA, numB)}.`);
console.log(`The result of ${numA} / ${numB} is ${divide(numA, numB)}.`);