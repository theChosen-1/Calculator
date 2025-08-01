// Calculator functions
function add(num1, num2) {
    addition = num1 + num2;
    return addition;
}

function subtract(num1, num2) {
    subtraction = num1 - num2;
    return subtraction;
}

function multiply(num1, num2) {
    multiplied = num1 * num2;
    return multiplied;
}

function divide(num1, num2) {
    divided = num1 / num2;
    return divided;
}

// Operate function
function operate(num1, num2, operator) {
    if (operator == '+') {
        return add(num1, num2);
    }
    else if (operator == '-') {
        return subtract(num1, num2);
    }
    else if (operator == '*') {
        return multiply(num1, num2);
    }
    else {
        return divide(num1, num2);
    }
}
