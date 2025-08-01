// Core state
let currentInput = '';      // what the user is currently typing
let expression = '';        // the expression chain (e.g 5 + 3)
let memory = null;          // holds last result
let operator = null;        // last selected operator

// Edits the DOM to display in real-time
const display = document.getElementById("display");

// Display function
function updateDisplay() {
  display.textContent = expression + currentInput || '0';
}

// Calculator functions
function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    if (num2 === 0) {
        return `Error`;
    }
    else {
        return (num1 / num2)
    }
}

// Perform a calculation
function calculate(num1, num2, operator) {
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

// When an operator is pressed
function operator(op) {
  // If user presses operator right after result
    if (result !== null && currentInput === '') {
        expression = result + ' ' + op + ' ';
        operator = op;
        updateDisplay();
        return;
    }
    
    // If there's a number to work with
    if (currentInput !== '') {
        const number = parseFloat(currentInput);
        
        // If this is the first number, store it in result
        if (result === null) {
            result = number;
        
        // If result already has a value and an operator exists, perform the calculation
        } else if (operator !== null) {
        result = calculate(result, number, operator);
        }

        // Store the new operator, update the expression and clear the current number 
        // being typed so user can type the next number
        operator = op;
        expression = result + ' ' + operator + ' ';
        currentInput = '';
        updateDisplay();
    }
}
