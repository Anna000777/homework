const firstNumber = +prompt('Enter first number');
const operation = prompt('Enter operator');
const secondNumber = +prompt('Enter second number');
let result;

if (isNaN(firstNumber)) {
    alert('First number is not a number');
} else if (isNaN(secondNumber)) {
    alert('Second number is not a number');
} else {
    if (operation === '+') {
        alert(`Your result is ${result = firstNumber + secondNumber}`);
    } else if (operation === '-') {
        alert(`Your result is ${result = firstNumber - secondNumber}`);
    } else if (operation === '*') {
        alert(`Your result is ${result = firstNumber * secondNumber}`);
    } else if (operation === '/') {
        alert(`Your result is ${result = firstNumber / secondNumber}`);
    } else {
        alert('Incorrect operator')
    }
}