// Core state
let currentInput = '';      // what the user is currently typing
let expression = '';        // the expression chain (e.g 5 + 3)
let memory = null;          // holds last result
let operator = null;        // last selected operator

// Edits the DOM to display in real-time
const display = document.getElementById("display");

// Display function
function updateDisplay() {
    display.textContent = (expression + currentInput) || '0';
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
function operate(newOperator) {
  // If user presses operator right after result
    if (memory !== null && currentInput === '') {
        expression = memory + ' ' + newOperator + ' ';
        operator = newOperator;
        updateDisplay();
        return;
    }
    
    // If there's a number to work with
    if (currentInput !== '') {
        const number = parseFloat(currentInput);
        
        // If this is the first number, store it in memory
        if (memory === null) {
            memory = number;
        
        // If memory already has a value and an operator exists, perform the calculation
        } else if (operator !== null) {
        memory = calculate(memory, number, operator);
        }

        // Store the new operator, update the expression and clear the current number 
        // being typed so user can type the next number
        operator = newOperator;
        expression = memory + ' ' + operator + ' ';
        currentInput = '';
        updateDisplay();
    }
}

// Handle digit button press
function pressDigit(digit) {
    currentInput += digit;
    updateDisplay();
}

// Handle decimals
function pressDecimal() {
    // If nothing is typed yet, start with "0."
    if (currentInput === '') {
        currentInput = '0.';
    
    // If there’s already a number but no decimal, add it 
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

// Handles equals 
function pressEquals() {
    // If there is an operator present, and a second number 
    if (operator && currentInput !== '') {
        const number = parseFloat(currentInput);
        // calculate the result
        memory = calculate(memory, number, operator);
        expression += currentInput + ' = ';
        // Converts the result back to a string so it can be displayed
        // 	Sets it as the new currentInput so it shows on screen
        currentInput = memory.toString();
        operator = null;
        updateDisplay();
        // Reset expression for next operation
        expression = '';
    }
}

// reset everything to original
function clearAll() {
    currentInput = '';
    expression = '';
    memory = null;
    operator = null;
    updateDisplay();
}

// Backspace last digit
function clearLastEntry() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

// Attaching functions to buttons
